import { useRecoilState } from "recoil";
import {
  CutImgAtom,
  PullImgAtom,
  UserNameAtom,
} from "../../stores/User/user.store";
import { useState } from "react";
import { customAxios } from "../../libs/customAxios";
import { useNavigate } from "react-router-dom";

const useEmoji = () => {
  const [useName, setUserName] = useRecoilState(UserNameAtom);
  const [pullImg, setPullImg] = useRecoilState(PullImgAtom);
  const [cutImg, setCutImg] = useRecoilState(CutImgAtom);
  const [loading, setLoading] = useState(false);
  const NameChange = (e) => {
    setUserName(e.target.value);
    // console.log(useName);
  };

  const navigate = useNavigate();

  let array = [
    "The shape of this person's face is",
    "(round)",
    "the shape of his eyes is",
    "(round eyes)",
    "and the shape of his nose is",
    "(high)",
    "and the shape of his lips is",
    "(heart-shaped)",
    "lips real person bald head",
  ];

  const onUpload = async () => {
    setLoading(true);
    try {
      let str1 = localStorage.getItem("arrayData");
      let str2 = JSON.parse(str1);
      const str3 = str2.toString();

      const datas = {
        prompt: str3,
      };

      const data = await customAxios.post("/images", datas);

      setPullImg(data.data.imageUrl);
      setCutImg(data.data.imageUrlWithoutBg);
      setLoading(false);
      navigate("/cashop/download");
    } catch (e) {
      setLoading(false);
      alert("error.. 다시 시도해주세요");
      console.log(e);
    }
  };

  return {
    NameChange,
    useName,
    setUserName,
    array,
    setUserName,
    onUpload,
    pullImg,
    setPullImg,
    loading,
    cutImg,
  };
};

export default useEmoji;
