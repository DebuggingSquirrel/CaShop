import { useRecoilState } from "recoil";
import { UserNameAtom } from "../../stores/User/user.store";

const useEmoji = () => {
  const [useName, setUserName] = useRecoilState(UserNameAtom);

  const NameChange = (e) => {
    setUserName(e.target.value);
    console.log(useName);
  };

  return { NameChange, useName };
};

export default useEmoji;
