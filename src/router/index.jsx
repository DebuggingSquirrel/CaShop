import { Route, Routes } from "react-router-dom";
import MyEmojiPage from "../pages/MyEmojiPage/MyEmojiPage";
import Header from "../components/common/Header";
import Question1Page from "../pages/QuestionPage/Question1Page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MyEmojiPage />} />
      <Route path="/question/1" element={<Question1Page />} />
      {/* <Route path="/t" element={<Header />} /> */}
    </Routes>
  );
}
