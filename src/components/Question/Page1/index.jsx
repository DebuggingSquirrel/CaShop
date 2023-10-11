import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";
import { useNavigate } from "react-router-dom";

const Question1 = () => {
  const { Face1, Face2 } = useQuestion();
  const { useName } = useEmoji();
  const [FaceState, SetFaceState] = useState("");
  const navigate = useNavigate();

  return (
    <Q.QuestionContainer>
      <Header />
      <Q.QuestionBox>
        <Q.QuestionInfoBox>
          <Q.QuestionText>{useName}는 어떤 얼굴형인가요?</Q.QuestionText>
          <Q.QuestionButtonBox>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {Face1.map((key) => (
                <Q.QuestionListButton onClick={() => SetFaceState(key.face)}>
                  {key.face}
                </Q.QuestionListButton>
              ))}
            </div>
            <div>
              {Face2.map((key) => (
                <Q.QuestionListButton onClick={() => SetFaceState(key.face)}>
                  {key.face}
                </Q.QuestionListButton>
              ))}
            </div>
          </Q.QuestionButtonBox>
          <Q.QuestionNextButton onClick={() => navigate("/question/2")}>
            다음으로
          </Q.QuestionNextButton>
          <Q.Text>특징을 직접 서술 할래요</Q.Text>
        </Q.QuestionInfoBox>
        <div>
          <Q.EmojiListBox>
            <Q.Test style={{}}>
              <Q.EmojiList></Q.EmojiList>
            </Q.Test>
            <Q.EmojiBox>
              <Q.Emoji>{FaceState}</Q.Emoji>
            </Q.EmojiBox>
            <Q.UserName>{useName}</Q.UserName>
          </Q.EmojiListBox>
        </div>
      </Q.QuestionBox>
    </Q.QuestionContainer>
  );
};

export default Question1;
