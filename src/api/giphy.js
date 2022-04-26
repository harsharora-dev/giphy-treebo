import { GiphyApi } from "./common";
import { GIPHY_URLS } from "./urls";

const getTrendingGifs = (params) => GiphyApi.get(GIPHY_URLS.trending, params);

const searchGifs = (params) => GiphyApi.get(GIPHY_URLS.search, params);

export { getTrendingGifs, searchGifs };
