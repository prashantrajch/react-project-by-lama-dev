import { Sidebar, Topbar } from "./components";
import "./app.css";
import {
  Home,
  NewProduct,
  NewUser,
  Product,
  ProductList,
  User,
  UserList,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "users", element: <UserList /> },
        { path: "user/:userId", element: <User /> },
        { path: "newUser", element: <NewUser /> },
        { path: "products", element: <ProductList /> },
        { path: "product/:productId", element: <Product /> },
        { path: "newProduct", element: <NewProduct /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
