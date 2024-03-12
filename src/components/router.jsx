import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { FriendsPage } from "./friends";

const router = createBrowserRouter([
  {
    path: "/friends",
    element: null,
    children: [
      {
        path: "/friends",
        index: true,
        element: <FriendsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/friends"} />,
  },
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
