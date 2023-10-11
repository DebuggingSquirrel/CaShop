import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";

const Question2 = () => {
  const { Eyes1, Eyes2 } = useQuestion();
  const { useName } = useEmoji();
  const [FaceState, SetFaceState] = useState("");

  return (
    <Q.QuestionContainer>
      <Header />
      <Q.QuestionBox>
        <Q.QuestionInfoBox>
          <Q.QuestionText>{useName}는 어떤 눈 모형인가요?</Q.QuestionText>
          <Q.QuestionButtonBox>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {Eyes1.map((key) => (
                <Q.QuestionListButton onClick={() => SetFaceState(key.face)}>
                  {key.face}
                </Q.QuestionListButton>
              ))}
            </div>
            <div>
              {Eyes2.map((key) => (
                <Q.QuestionListButton onClick={() => SetFaceState(key.face)}>
                  {key.face}
                </Q.QuestionListButton>
              ))}
            </div>
          </Q.QuestionButtonBox>
          <Q.QuestionNextButton>다음으로</Q.QuestionNextButton>
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

export default Question2;
