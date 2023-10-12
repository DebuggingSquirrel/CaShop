import { useState } from "react";
import useEmoji from "../../../hooks/Emoji/useEmoji";
import useQuestion from "../../../hooks/Question/useQuestion";
import Header from "../../common/Header";
import * as Q from "../style";
import { useNavigate } from "react-router-dom";
import PageImg from "../../../assets/image/page.svg";
import CASHOP from "../../../assets/image/CASHOP.svg";
import Loading from "../../common/Loading";

const Question4 = () => {
  const { Mouth1, Mouth2 } = useQuestion();
  const { useName, onUpload, loading } = useEmoji();
  const [mouthState, SetMouthState] = useState("");
  const navigate = useNavigate();

  let storedData = localStorage.getItem("arrayData");
  let myArray = JSON.parse(storedData);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Q.QuestionContainer>
          <Header />
          <Q.QuestionBox>
            <Q.QuestionInfoBox>
              <Q.QuestionText>{useName}는 어떤 입 모양인가요?</Q.QuestionText>
              <Q.QuestionButtonBox>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "40px",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {Mouth1.map((key, index) => (
                      <Q.QuestionListButton
                        onClick={() => {
                          myArray[7] = key.value;
                          SetMouthState(key.mouth);
                          localStorage.setItem(
                            "arrayData",
                            JSON.stringify(myArray)
                          );
                        }}
                      >
                        {key.mouth}
                      </Q.QuestionListButton>
                    ))}
                  </div>
                  <div>
                    {Mouth2.map((key, index) => (
                      <Q.QuestionListButton
                        onClick={() => {
                          myArray[7] = key.value;
                          SetMouthState(key.mouth);
                          localStorage.setItem(
                            "arrayData",
                            JSON.stringify(myArray)
                          );
                        }}
                      >
                        {key.mouth}
                      </Q.QuestionListButton>
                    ))}
                  </div>
                </div>
                <Q.QuestionInput placeholder="추가사항을 적어주세요. (선택)"></Q.QuestionInput>
              </Q.QuestionButtonBox>
              <Q.QuestionNextButton
                style={{ backgroundColor: mouthState ? "#6346FF" : "white" }}
                onClick={() => {
                  onUpload();
                }}
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
                  <Q.Emoji>{mouthState}</Q.Emoji>
                </Q.EmojiBox>
                <Q.UserName>{useName}</Q.UserName>
              </Q.EmojiListBox>
            </div>
          </Q.QuestionBox>
        </Q.QuestionContainer>
      )}
    </>
  );
};

export default Question4;
