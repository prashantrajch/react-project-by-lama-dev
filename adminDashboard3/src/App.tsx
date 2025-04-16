import Layout from "./Layout";
import { Home, Login, Product, Products, User, Users } from "./pages";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
