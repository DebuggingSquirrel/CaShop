import { Route, Routes } from "react-router-dom";
import MyEmojiPage from "../pages/MyEmojiPage/MyEmojiPage";
import Header from "../components/common/Header";
import Question1Page from "../pages/QuestionPage/Question1Page";
import MapingPage from "../components/3D_map/forestMaping";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MyEmojiPage />} />
      <Route path="/question/1" element={<Question1Page />} />
      <Route path="/maping" element={<MapingPage />} />
      {/* <Route path="/t" element={<Header />} /> */}
    </Routes>
  );
}
