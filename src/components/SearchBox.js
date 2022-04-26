import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  appearance: none;
  border-radius: 0px;
  font-weight: normal;
  width: 100%;
  margin: 0px;
  height: 52px;
  outline: 0;
  letter-spacing: 1px;
  font-size: 18px;
  padding: 0 17px;
`
const SearchBox = ({ handleUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    handleUpdate(searchTerm);
  }, [searchTerm, handleUpdate]);

  const handleChange = e => setSearchTerm(e.target.value);
  
  return <Input maxLength={1000} placeholder="Search all the GIFs and Stickers" onChange={handleChange} value={searchTerm} />
}

SearchBox.propTypes = {
  handleUpdate: PropTypes.func
}

SearchBox.defaultProps = {
  handleUpdate: () => {}
}

export default SearchBox;