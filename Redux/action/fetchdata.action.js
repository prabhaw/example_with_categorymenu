import { FETCH_DATA } from "./types";

import axios from "axios";

export const getItems = () => async (dispatch) => {
  await axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
    dispatch({ type: FETCH_DATA, payload: data.data });
  });
};
