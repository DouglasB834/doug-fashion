import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage/home.page";
import { LoginPage } from "./pages/login/loginPage";
import Layout from "./pages/layout";
import NotFound from "./notFound";

export const MainRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />
    <Route
      path="/login"
      element={
        <Layout>
          <LoginPage />
        </Layout>
      }
    />
    <Route path="*" element={<NotFound />} />;
  </Routes>
);
