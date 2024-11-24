import { Route, Routes } from "react-router-dom";

import Categorie from "./pages/Categories/categorie.page";
import HomePage from "./pages/homePage/home.page";
import { LoginPage } from "./pages/login/loginPage";
import Layout from "./pages/layout";
import NotFound from "./pages/notFound";

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
      path="/Categorie"
      element={
        <Layout>
          <Categorie />
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
