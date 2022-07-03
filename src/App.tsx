import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home"));
const Detail = React.lazy(() => import("./pages/detail"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
