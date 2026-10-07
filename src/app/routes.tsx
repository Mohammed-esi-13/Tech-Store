import { createBrowserRouter } from "react-router";
import Experience from "../App";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: Experience,
  },
]);
