import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../App/App";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
// import MakeAppointmentForm from "../MakeAppointmentForm/MakeAppointmentForm";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NanniesPage = lazy(() => import("../../pages/NanniesPage/NanniesPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute component={<HomePage />} redirectTo="/nannies" />
            }
          />
          <Route
            path="/nannies"
            element={
              <PrivateRoute component={<NanniesPage />} redirectTo="/" />
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} /> //??
          {/* <Route path="/modal" element={<MakeAppointmentForm />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
