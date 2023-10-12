import { Route, Routes } from "react-router-dom";
import MyEmojiPage from "../pages/MyEmojiPage/MyEmojiPage";
import Question1Page from "../pages/QuestionPage/Question1Page";

import MapingPage from "../components/3D_map/forestMaping";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

import Question2Page from "../pages/QuestionPage/Question2Page";
import Question3Page from "../pages/QuestionPage/Question3Page";
import Question4Page from "../pages/QuestionPage/Question4Page";
import DownloadPage from "../pages/DownloadPage/DownloadPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MyEmojiPage />} />
      <Route path="/maping" element={<MapingPage />} />
      <Route path="/question/1" element={<Question1Page />} />

      <Route path="/maping" element={<MapingPage />} />

      <Route path="/question/2" element={<Question2Page />} />
      <Route path="/question/3" element={<Question3Page />} />
      <Route path="/question/4" element={<Question4Page />} />
      <Route path="/cashop/download" element={<DownloadPage />} />
    </Routes>
  );
}
