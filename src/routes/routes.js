import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage, {loader as homeLoader} from '../homePage1/homePage';
import DataVisualise from  '../dataVisualize/dataVisualise';
  

export default function Router() {
    

return  (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/dataVisual" element={<DataVisualise />} />
</Routes>
</BrowserRouter>
);
}