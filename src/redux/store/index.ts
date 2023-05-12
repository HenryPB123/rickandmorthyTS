import { configureStore } from "@reduxjs/toolkit";
// reducers
import characters from "../slices/slices";
// import activities from "./slices/activities/activitiesSlice";

export default configureStore({
  reducer: {
    characters,
  },
});
