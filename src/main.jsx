import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";

import Test from "./components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to={"/exists"}>Exists</Link>
        <br />
        <Link to={"/404"}>404</Link>
        <Test />
      </div>
    ),
    errorElement: (
      <div>
        <p>Error Oh no</p>
        <Link to={"/"}>Home</Link>
        <Test />
      </div>
    ),
  },
  {
    path: "/exists",
    element: (
      <div>
        <Link to={"/"}>Home</Link>
        <Test />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
