import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import Header from "./Header";
import Comics from "./Comics/Comics";
import Story from "./Comics/Story";
import FavoritesBookmarks from "./FavoritesBookmarks";

const ProviderRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "marvelcomics",
      element: (
        <PrivateRoute>
          <Comics />
        </PrivateRoute>
      ),
    },
    {
      path: "issue/:comicId",
      element: (
        <PrivateRoute>
          <Story />
        </PrivateRoute>
      ),
    },
    {
      path: "favoritos",
      element: (
        <PrivateRoute>
          <FavoritesBookmarks />
        </PrivateRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default ProviderRoutes;
