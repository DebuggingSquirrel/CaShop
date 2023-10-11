import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/image/Logo.png";
import useEmoji from "../../../hooks/Emoji/useEmoji";

const Header = () => {
  const navigate = useNavigate();
  const { setUserName } = useEmoji();
  return (
    <div>
      <img
        src={Logo}
        style={{ marginTop: "34px", marginLeft: "174px" }}
        onClick={() => {
          navigate("/");
          setUserName("");
        }}
      />
    </div>
  );
};

export default Header;
