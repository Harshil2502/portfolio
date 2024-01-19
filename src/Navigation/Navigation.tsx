import { createBrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import HomePage from "../Pages/HomePage/HomePage";

export const ROUTES = {
  HOME: "/",
};

const navigationRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <AppRouter>
        <HomePage />
      </AppRouter>
    ),
  },
]);

export default navigationRouter;
