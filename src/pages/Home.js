import React, { useEffect, useState } from "react";
import { getTrendingGifs, searchGifs } from "../api/giphy";
import ImageList from "../components/ImageList";
import Message from "../components/Message";
import SearchBox from "../components/SearchBox";
import InfiniteScroll from "../utils/InfiniteScroll";
import useDebounce from "../utils/useDebounce";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [list, setList] = useState([]);
  const [hasEnd, setHasEnd] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const getGiphy = async (args = {}) => {
    // returning if already in progress
    if (processing) return;
    const { reset, newSearchTerm } = args;
    setProcessing(true);
    const params = {
      offset: reset ? 0 : offset,
      ...(newSearchTerm && {
        q: newSearchTerm
      })
    };
    const response = newSearchTerm
      ? await searchGifs({ params })
      : await getTrendingGifs({params});
    setProcessing(false);
    const { data, pagination } = response.data;
    // updating offset after the result has come
    if (pagination) {
      setOffset(newSearchTerm ? pagination.count : offset + pagination.count);
    }
    // updating the list after fetch
    setList(reset ? [...data] : [...list, ...data]);
    // ending the 
    setHasEnd(!data || (data && !data.length));
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setOffset(0);
      setHasEnd(false);
      getGiphy({ reset: true, newSearchTerm: debouncedSearchTerm });
    } else {
      setList([]);
      setOffset(0);
      setHasEnd(false);
      getGiphy({ reset: true });
    }
  },
  [debouncedSearchTerm]
);

  const updateSearchTerm = newSearchTerm => setSearchTerm(newSearchTerm);

  return <div>
    <SearchBox handleUpdate={updateSearchTerm} />
    <ImageList imageList={list} />
    { 
      !processing 
      && !hasEnd 
      && <InfiniteScroll callback={getGiphy} /> 
    }
    { processing && <Message message="Loading..." />}
    { hasEnd && <Message message={list.length === 0 ? "Nothing found :(" : "That's all folks!"} /> }
  </div>
}

export default Home;