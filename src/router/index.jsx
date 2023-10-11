import { Route, Routes } from "react-router-dom";
import MyEmojiPage from "../pages/MyEmojiPage/MyEmojiPage";
import Header from "../components/common/Header";
import Question1Page from "../pages/QuestionPage/Question1Page";
import Question2Page from "../pages/QuestionPage/Question2Page";
import Question3Page from "../pages/QuestionPage/Question3Page";
import Question4Page from "../pages/QuestionPage/Question4Page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MyEmojiPage />} />
      <Route path="/question/1" element={<Question1Page />} />
      <Route path="/question/2" element={<Question2Page />} />
      <Route path="/question/3" element={<Question3Page />} />
      <Route path="/question/4" element={<Question4Page />} />
    </Routes>
  );
}
