import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";
import { useNavigate } from "react-router-dom";
import PageImg from "../../../assets/image/pen.gif";
import CASHOP from "../../../assets/image/CASHOP.svg";

const Question1 = () => {
  const { Face1, Face2 } = useQuestion();
  const { useName, array } = useEmoji();
  const [FaceState, setFaceState] = useState("");
  // console.log(FaceState);
  const navigate = useNavigate();
  const [tset, setTest] = useState();

  return (
    <Q.QuestionContainer>
      <Header />
      <Q.QuestionBox>
        <Q.QuestionInfoBox>
          <Q.QuestionText>{useName}는 어떤 얼굴형인가요?</Q.QuestionText>
          <Q.QuestionButtonBox>
            <div
              style={{
                display: "flex",
                marginBottom: "40px",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Face1.map((key, index) => (
                  <Q.QuestionListButton
                    style={{
                      backgroundColor:
                        FaceState == key.face ? "#5E6279" : "#282d4b",
                    }}
                    onClick={() => {
                      array.splice(1, 1, key.value);
                      setFaceState(key.face);
                      localStorage.setItem("arrayData", JSON.stringify(array));
                    }}
                  >
                    {key.face}
                  </Q.QuestionListButton>
                ))}
              </div>
              <div>
                {Face2.map((key, index) => (
                  <Q.QuestionListButton
                    style={{
                      backgroundColor:
                        FaceState == key.face ? "#5E6279" : "#282d4b",
                    }}
                    onClick={() => {
                      array.splice(1, 1, key.value);
                      setFaceState(key.face);
                      localStorage.setItem("arrayData", JSON.stringify(array));
                    }}
                  >
                    {key.face}
                  </Q.QuestionListButton>
                ))}
              </div>
            </div>

            <Q.QuestionInput placeholder="추가사항을 적어주세요. (선택)"></Q.QuestionInput>
          </Q.QuestionButtonBox>

          <Q.QuestionNextButton
            onClick={() => {
              navigate("/question/2");
            }}
            style={{ backgroundColor: FaceState ? "#6346FF" : "white" }}
          >
            다음으로
          </Q.QuestionNextButton>
          {/* <Q.Text>특징을 직접 서술 할래요</Q.Text> */}
        </Q.QuestionInfoBox>
        <div>
          <Q.EmojiListBox>
            <Q.ChahopBox>
              <Q.Chahop src={CASHOP} style={{ width: "100px" }} />
            </Q.ChahopBox>
            <Q.Test style={{}}>
              <Q.EmojiList>
                <img src={PageImg} />
              </Q.EmojiList>
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
