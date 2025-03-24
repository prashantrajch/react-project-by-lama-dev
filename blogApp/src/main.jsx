import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Settings,
  Single,
  Write,
} from "./pages/index.js";

const user = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Home />,
      },
      {
        path: "register",
        element: user ? <Home /> : <Register />,
      },
      {
        path: "login",
        element: user ? <Home /> : <Login />,
      },
      {
        path: "write",
        element: user ? <Home /> : <Write />,
      },
      {
        path: "settings",
        element: user ? <Home /> : <Settings />,
      },
      {
        path: "post/:postId",
        element: <Single />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
