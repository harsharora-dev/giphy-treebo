import axios from "axios";

// giphy api instance
export const GiphyApi = axios.create({
  baseURL: process.env.REACT_APP_GIPHY_URL,
  params: {
    api_key: process.env.REACT_APP_GIPHY_API_KEY
  }
});