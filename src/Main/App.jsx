import { Routes, Route } from "react-router-dom";
import Home from "../JsxFile/Home/MainHome.jsx";
import Add from '../JsxFile/Add/MainAdd.jsx'
import NotFound from '../JsxFile/Help/NotFound.jsx'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/register" element={<Add />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

