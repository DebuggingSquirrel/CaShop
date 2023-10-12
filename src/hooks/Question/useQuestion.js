const useQuestion = () => {
  const Face1 = [
    {
      face: "동그란",
      value: "round",
      test: "Red",
    },
    {
      face: "길쭉한",
      value: "elongated",
      test: "Red",
    },
  ];

  const Face2 = [
    {
      face: "각진",
      value: "angularity",
      test: "Red",
    },
    {
      face: "뾰족한",
      value: "pointed",
      test: "Red",
    },
  ];

  const Eyes1 = [
    {
      eyes: "동그란",
      value: "round",
    },
    {
      eyes: "길쭉한",
      value: "elongated",
    },
  ];

  const Eyes2 = [
    {
      eyes: "처진",
      value: "sagging",
    },
    {
      eyes: "날카로운",
      value: "Sharp",
    },
  ];

  const Nose1 = [
    {
      nose: "뭉툭한",
      value: "stubby",
    },
    {
      nose: "오똑한",
      value: "smart",
    },
  ];

  const Nose2 = [
    {
      nose: "작은",
      value: "Small",
    },
    {
      nose: "큰",
      value: "Big",
    },
  ];

  const Mouth1 = [
    {
      mouth: "하트모양",
      value: "Heart shape",
    },
    {
      mouth: "도톰한",
      value: "thick",
    },
  ];

  const Mouth2 = [
    {
      mouth: "동그란",
      value: "round",
    },
    {
      mouth: "얇은",
      value: "Thin",
    },
  ];

  return { Face1, Face2, Eyes1, Eyes2, Nose1, Nose2, Mouth1, Mouth2 };
};

export default useQuestion;
