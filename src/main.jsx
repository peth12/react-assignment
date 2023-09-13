import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeUser from "./HomeUser.jsx";
import HomeAdmin from "./HomeAdmin.jsx";
import Owner from "./Owner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homeuser",
    element: <HomeUser />,
  },
  {
    path: "/homeadmin",
    element: <HomeAdmin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
