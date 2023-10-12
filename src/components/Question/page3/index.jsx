import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";
import { useNavigate } from "react-router-dom";
import PageImg from "../../../assets/image/pen.gif";
import CASHOP from "../../../assets/image/CASHOP.svg";

const Question3 = () => {
  const { Nose1, Nose2 } = useQuestion();
  const { useName } = useEmoji();
  const [noseState, SetNoseState] = useState("");
  const navigate = useNavigate();

  let storedData = localStorage.getItem("arrayData");
  let myArray = JSON.parse(storedData);

  return (
    <Q.QuestionContainer>
      <Header />
      <Q.QuestionBox>
        <Q.QuestionInfoBox>
          <Q.QuestionText>{useName}는 어떤 코 모양인가요?</Q.QuestionText>
          <Q.QuestionButtonBox>
            <div
              style={{
                display: "flex",
                marginBottom: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Nose1.map((key, index) => (
                  <Q.QuestionListButton
                    onClick={() => {
                      myArray[5] = key.value;
                      SetNoseState(key.nose);
                      localStorage.setItem(
                        "arrayData",
                        JSON.stringify(myArray)
                      );
                    }}
                  >
                    {key.nose}
                  </Q.QuestionListButton>
                ))}
              </div>
              <div>
                {Nose2.map((key, index) => (
                  <Q.QuestionListButton
                    onClick={() => {
                      myArray[5] = key.value;
                      SetNoseState(key.nose);
                      localStorage.setItem(
                        "arrayData",
                        JSON.stringify(myArray)
                      );
                    }}
                  >
                    {key.nose}
                  </Q.QuestionListButton>
                ))}
              </div>
            </div>
            <Q.QuestionInput placeholder="추가사항을 적어주세요. (선택)"></Q.QuestionInput>
          </Q.QuestionButtonBox>
          <Q.QuestionNextButton
            onClick={() => navigate("/question/4")}
            style={{ backgroundColor: noseState ? "#6346FF" : "white" }}
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
              <Q.Emoji>{noseState}</Q.Emoji>
            </Q.EmojiBox>
            <Q.UserName>{useName}</Q.UserName>
          </Q.EmojiListBox>
        </div>
      </Q.QuestionBox>
    </Q.QuestionContainer>
  );
};

export default Question3;
