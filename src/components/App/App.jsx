import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../App/App";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import Layout from "../Layout/Layout";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NanniesPage = lazy(() => import("../../pages/NanniesPage/NanniesPage"));

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
