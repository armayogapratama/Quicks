import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/layout";
import HomeView from "../components/HomeViews/homeView";
import LoginView from "../components/LoginViews/loginView";
import RegisterView from "../components/RegisterViews/registerView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/login",
        element: <LoginView />,
        loader: () => {
          if (localStorage.access_token) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/register",
        element: <RegisterView />,
      },
    ],
  },
]);

export default router;
