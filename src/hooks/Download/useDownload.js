import * as htmlToImage from "html-to-image";
import {
  toPng,
  toJpeg,
  toBlob,
  toPixelData,
  toSvg,
  FileSaver,
} from "html-to-image";
import { useRef } from "react";
import { saveAs } from "file-saver";

const useDownload = () => {
  const cardRef = useRef(null);
  const TitleMakerRef = cardRef.current?.scrollWidth || 0;
  const onDownloadBtn = async () => {
    const card = cardRef.current;

    if (card) {
      const filter = (node) => {
        return node.tagName !== "BUTTON";
      };

      const options = {
        filter,
        pixelRatio: 10,
        padding: 0,
      };

      try {
        const blob = await htmlToImage.toBlob(card, options);
        if (blob) {
          //   titleImageFile.append("file", blob);

          saveAs(blob, "card.png");
        }
      } catch (e) {}
    } else {
      console.error("이미지가 저장되지 않았습니다.");
    }
  };
  return { cardRef, onDownloadBtn };
};

export default useDownload;
