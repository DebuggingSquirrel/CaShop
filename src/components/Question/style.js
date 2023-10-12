import styled from "styled-components";

export const QuestionContainer = styled.div`
  background-color: #0f111e;
  height: 100vh;
  width: 100vw;
`;

export const QuestionNextButton = styled.button`
  width: 130px;
  height: 60px;

  border: 0;
  border-radius: 43px;

  font-size: 22px;
  font-family: Pretendard7;
  color: #b0b8c1;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const QuestionText = styled.div`
  text-align: center;
  font-size: 32px;
  color: white;

  font-family: Pretendard7;

  margin-bottom: 35px;
`;

export const QuestionListButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #282d4b;

  width: 200px;
  height: 70px;

  border-radius: 15px;

  cursor: pointer;

  color: white;
  font-family: Pretendard7;
  font-size: 22px;

  text-align: center;

  margin-left: 20px;
  margin-bottom: 15px;
`;

export const QuestionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 111px;
`;

export const QuestionBox = styled.div`
  display: flex;

  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  color: #b0b8c1;

  font-size: 15px;
  border-bottom: 1px solid #b0b8c1;

  font-family: Pretendard7;
`;

export const QuestionButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
`;

export const EmojiListBox = styled.div`
  width: 315px;
  height: 420px;

  background-color: #282d4b;

  border-radius: 20px;
`;
export const Test = styled.div`
  display: flex;
  justify-content: center;
`;

export const EmojiList = styled.div`
  display: flex;

  width: 248px;
  height: 245px;
  background-color: #0f111e;

  margin-top: 16px;

  @keyframes loop {
    0% {
      top: 0px;
      left: 0px;
    }
    50% {
      top: 0px;
      left: 20px;
    }
    100% {
      top: 0px;
      left: 0px;
    }
  }

  img {
    position: relative;
    animation: loop 1.1s infinite;
  }
`;

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;

  color: #ffffff;
  font-size: 24px;
  font-family: Pretendard7;
`;

export const EmojiBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
`;

export const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #5e6279;

  width: 110px;
  height: 30px;

  border-radius: 50px;

  font-size: 15px;
  font-family: Pretendard7;
  color: white;
`;

export const QuestionInput = styled.input`
  width: 390px;
  height: 70px;

  margin-left: 20px;

  border-radius: 15px;
  border: 0;

  background-color: #282d4b;

  margin-top: -40px;
  margin-bottom: 18px;

  font-family: Pretendard7;
  font-size: 18px;
  color: #b0b8c1;

  padding-left: 29px;
`;

export const ChahopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chahop = styled.img`
  margin-top: 16px;
`;
