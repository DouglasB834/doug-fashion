// import { createBrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage/home.page";
import NotFound from "./notFound";

export const MainRouter = () => (
  <Routes>
    <Route path={"/"} element={<HomePage />} />

    <Route path={"*"} element={<NotFound />} />
  </Routes>
);
