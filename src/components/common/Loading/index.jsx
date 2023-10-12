import spin from "../../../assets/image/spin.gif";
import Header from "../Header";
import * as L from "./style";

const Loading = () => {
  return (
    <L.LoadingContainer>
      <Header />
      <L.LoadingBox>
        <div>
          <L.Text>
            엄청난 캐샵이 만들어지는 중...
            <br />
            마음껏 기대하세요 !
          </L.Text>
          <div>
            <img src={spin} />
          </div>
        </div>
      </L.LoadingBox>
    </L.LoadingContainer>
  );
};

export default Loading;
