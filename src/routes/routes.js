import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage, { loader as homeLoader } from "../homePage1/homePage";
import DataVisualise from "../dataVisualize/dataVisualise";
import ChartList from "../chartList/chartList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dataVisual" element={<DataVisualise />} />
        <Route path="/chartList" element={<ChartList />} />
      </Routes>
    </BrowserRouter>
  );
}
