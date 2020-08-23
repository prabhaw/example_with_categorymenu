import { OPEN_HNT } from "./types";

export const open_hint = (state) => (dispatch) => {
  dispatch({ type: OPEN_HNT, payload: state });
};
