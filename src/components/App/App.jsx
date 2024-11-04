import { Route, Routes } from "react-router-dom";
import "../App/App";
import HomePage from "../../pages/HomePage/HomePage";
import NanniesPage from "../../pages/NanniesPage/NanniesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
