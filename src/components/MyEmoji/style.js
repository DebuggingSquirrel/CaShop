import styled from "styled-components";

export const EmojiContainer = styled.div`
  background-color: #0f111e;
  height: 100vh;
  width: 100vw;
`;

export const EmojiInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-right: 96px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 32px;
  color: white;

  font-family: Pretendard7;

  img {
    margin-top: -11.5px;
  }
`;

export const EmojiInputBox = styled.div`
  margin-bottom: 35px;
`;
export const Input = styled.input`
  width: 250px;
  height: 50px;

  background-color: #282d4b;
  color: #5e6279;

  border-radius: 15px;
  border: none;
  outline: none;

  font-size: 15px;

  text-align: center;

  input::placeholder {
    text-align: center;
  }

  &:focus {
    border: 2px solid #5e6279;
  }
`;

export const EmojiButtonBox = styled.div``;

export const EmojiNextBox = styled.button`
  width: 130px;
  height: 60px;

  background-color: white;

  border-radius: 43px;

  font-size: 22px;
  font-family: Pretendard7;
  color: #b0b8c1;
`;

export const EmojiBox = styled.div`
  display: flex;

  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  margin-bottom: 29px;
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

  margin-top: 50px;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 110px;

  color: #ffffff;
  font-size: 24px;
  font-family: Pretendard7;
`;
