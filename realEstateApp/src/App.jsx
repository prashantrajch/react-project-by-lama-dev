import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  Layout,
  ListPage,
  Login,
  ProfilePage,
  Register,
  SinglePage,
} from "./routes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: "list/:id",
          element: <SinglePage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
