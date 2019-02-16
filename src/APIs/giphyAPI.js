import axios from "axios";

const giphyApi = word => {
  const search = word;
  const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
  const limit = 30;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyApi;
