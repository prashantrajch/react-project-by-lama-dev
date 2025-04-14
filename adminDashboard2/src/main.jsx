import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, List, Login, New, Single } from "./pages/index.js";
import { productInputs, userInputs } from "./formSource.js";
import "./style/dark.scss";
import { DarkModeContexProvider } from "./context/darkModeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DarkModeContexProvider>
        <App />
      </DarkModeContexProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <List />,
      },
      {
        path: "users/:userId",
        element: <Single />,
      },
      {
        path: "users/new",
        element: <New inputs={userInputs} title={"Add New User"} />,
      },
      {
        path: "products",
        element: <List />,
      },
      {
        path: "products/:productId",
        element: <Single />,
      },
      {
        path: "products/new",
        element: <New inputs={productInputs} title={"Add new Product"} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
