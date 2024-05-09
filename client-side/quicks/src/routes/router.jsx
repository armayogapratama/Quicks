import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/layout";
import HomeView from "../components/HomeViews/homeView";
import LoginView from "../components/LoginViews/loginView";
import RegisterView from "../components/RegisterViews/registerView";
import TaskView from "../components/TaskViews/taskView";
import NewTodoView from "../components/NewTodoViews/newTodoView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
        children: [
          {
            path: "todo",
            element: <TaskView />,
            children: [
              {
                index: true,
                path: "new-todo",
                element: <NewTodoView />,
              },
            ],
          },
        ],
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
