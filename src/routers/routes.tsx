import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PokemonPage, CatchPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catch" element={<CatchPage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
