import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("../App"));
const Home = lazy(() => import("../pages/Home"));
const Tags = lazy(() => import("../pages/Tags"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
    ],
  },
]);
