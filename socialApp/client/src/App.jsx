import { Home, Login, Profile, Register } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
