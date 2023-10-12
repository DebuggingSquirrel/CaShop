import download from "../../assets/image/download.svg";
import restart from "../../assets/image/restart.svg";
import Header from "../common/Header";
import * as D from "./style";
import useEmoji from "../../hooks/Emoji/useEmoji";
import CASHOP from "../../assets/image/CASHOP.svg";
import { useNavigate } from "react-router-dom";
import useDownload from "../../hooks/Download/useDownload";

const Download = () => {
  const { useName, setUserName, pullImg, setPullImg } = useEmoji();

  const navigate = useNavigate();
  const { cardRef, onDownloadBtn } = useDownload();
  return (
    <D.DownloadContainer>
      <Header />
      <D.DownloadBox>
        <D.DownloadInfoBox>
          <D.Text>
            캐샵 캐릭터 완성!
            <br />더 다양한 캐릭터들을 만들어보세요.
          </D.Text>
          <D.DownloadButtonBox>
            <div style={{ display: "flex" }}>
              <D.MapButton onClick={() => navigate("/maping")}>
                맵 구경하기
              </D.MapButton>
              <D.DownloadButton onClick={onDownloadBtn}>
                <img src={download} />
                이미지 저장
              </D.DownloadButton>
            </div>
          </D.DownloadButtonBox>
          <D.ReplayButton
            onClick={() => {
              navigate("/");
              localStorage.removeItem("arrayData");
              setUserName("");
              setPullImg("");
            }}
          >
            <img src={restart} style={{ marginRight: "8px" }} />
            다시 만들기
          </D.ReplayButton>
        </D.DownloadInfoBox>
        <div>
          <D.DownloadWrap>
            <D.ChahopBox>
              <D.Chahop src={CASHOP} style={{ width: "100px" }} />
            </D.ChahopBox>

            <D.Test style={{}}>
              <D.DownloadList ref={cardRef}>
                {/* {pullImg && ( */}
                <img src={pullImg} style={{ borderRadius: "15px" }} />
                {/* )} */}
              </D.DownloadList>
            </D.Test>
            <D.UserName>{useName}</D.UserName>
          </D.DownloadWrap>
        </div>

        {/* <img src={} /> */}
      </D.DownloadBox>
    </D.DownloadContainer>
  );
};

export default Download;
