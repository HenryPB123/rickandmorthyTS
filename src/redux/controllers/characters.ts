import axios from "axios";
import { setCharacters } from "../slices/slices";

export const getCharacters = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dispatch: any) => {
    // axios
    //   .get(`https://rickandmortyapi.com/api/character`)
    //   .then((response) => {
    //     dispatch(setCharacters(response.data));
    //   })
    //   .catch((error) => console.log(error));
  };
};
