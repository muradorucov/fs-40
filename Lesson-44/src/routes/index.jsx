import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Create from "../pages/create";
import Update from "../pages/update";
import Single from "../pages/single";
import Layout from "../layout";
import NotFound from "../pages/notfound";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
      {
        path: "/:id",
        element: <Single />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])