import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";
import { useNavigate } from "react-router-dom";
import PageImg from "../../../assets/image/page.svg";
import CASHOP from "../../../assets/image/CASHOP.svg";

const Question2 = () => {
  const { Eyes1, Eyes2 } = useQuestion();
  const { useName, test } = useEmoji();
  const [eyesState, SetEyesState] = useState("");
  const navigate = useNavigate();

  let storedData = localStorage.getItem("arrayData");
  let myArray = JSON.parse(storedData);

  return (
    <Q.QuestionContainer>
      <Header />
      <Q.QuestionBox>
        <Q.QuestionInfoBox>
          <Q.QuestionText>{useName}는 어떤 눈 모양인가요?</Q.QuestionText>
          <Q.QuestionButtonBox>
            <div
              style={{
                display: "flex",
                marginBottom: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Eyes1.map((key, index) => (
                  <Q.QuestionListButton
                    onClick={() => {
                      myArray[3] = key.value;
                      SetEyesState(key.eyes);
                      localStorage.setItem(
                        "arrayData",
                        JSON.stringify(myArray)
                      );
                    }}
                  >
                    {key.eyes}
                  </Q.QuestionListButton>
                ))}
              </div>
              <div>
                {Eyes2.map((key, index) => (
                  <Q.QuestionListButton
                    onClick={() => {
                      myArray[3] = key.value;
                      SetEyesState(key.eyes);
                      localStorage.setItem(
                        "arrayData",
                        JSON.stringify(myArray)
                      );
                    }}
                  >
                    {key.eyes}
                  </Q.QuestionListButton>
                ))}
              </div>
            </div>
            <Q.QuestionInput placeholder="추가사항을 적어주세요. (선택)"></Q.QuestionInput>
          </Q.QuestionButtonBox>
          <Q.QuestionNextButton
            onClick={() => navigate("/question/3")}
            style={{ backgroundColor: eyesState ? "#6346FF" : "white" }}
          >
            다음으로
          </Q.QuestionNextButton>
        </Q.QuestionInfoBox>
        <div>
          <Q.EmojiListBox>
            <Q.ChahopBox>
              <Q.Chahop src={CASHOP} style={{ width: "100px" }} />
            </Q.ChahopBox>
            <Q.Test>
              <Q.EmojiList>
                <img src={PageImg} />
              </Q.EmojiList>
            </Q.Test>
            <Q.EmojiBox>
              <Q.Emoji>{eyesState}</Q.Emoji>
            </Q.EmojiBox>
            <Q.UserName>{useName}</Q.UserName>
          </Q.EmojiListBox>
        </div>
      </Q.QuestionBox>
    </Q.QuestionContainer>
  );
};

export default Question2;
