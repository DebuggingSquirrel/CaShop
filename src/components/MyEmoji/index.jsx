import * as M from "./style";
import Name from "../../assets/image/Name.svg";
import Header from "../common/Header";
import useEmoji from "../../hooks/Emoji/useEmoji";
import { useNavigate } from "react-router-dom";

const MyEmoji = () => {
  const { NameChange, useName } = useEmoji();
  const navigate = useNavigate();
  return (
    <M.EmojiContainer>
      <Header />
      <M.EmojiBox>
        <M.EmojiInfoBox>
          <M.TextBox>
            <M.Text>
              <img src={Name} style={{}} />에 오신 것을 환영해요!
              <br />
            </M.Text>
            <M.Text>생성할 캐릭터의 이름을 알려주세요.</M.Text>
          </M.TextBox>

          <M.EmojiInputBox>
            <M.Input
              placeholder="닉네임"
              className="name"
              onChange={(e) => NameChange(e)}
            ></M.Input>
          </M.EmojiInputBox>
          <M.EmojiButtonBox>
            <M.EmojiNextBox onClick={() => navigate("/question/1")}>
              다음으로
            </M.EmojiNextBox>
          </M.EmojiButtonBox>
        </M.EmojiInfoBox>
        <div>
          <M.EmojiListBox>
            <M.Test style={{}}>
              <M.EmojiList></M.EmojiList>
            </M.Test>
            <M.UserName>{useName}</M.UserName>
          </M.EmojiListBox>
        </div>
      </M.EmojiBox>
    </M.EmojiContainer>
  );
};

export default MyEmoji;
