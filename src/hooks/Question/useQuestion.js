const useQuestion = () => {
  const Face1 = [
    {
      face: "동그란",
      value: "1",
    },
    {
      face: "길쭉한",
      value: "2",
    },
  ];

  const Face2 = [
    {
      face: "각진",
      value: "3",
    },
    {
      face: "길쭉한",
      value: "4",
    },
  ];

  const Eyes1 = [
    {
      eyes: "눈1",
      value: "1",
    },
    {
      eyes: "눈2",
      value: "2",
    },
  ];

  const Eyes2 = [
    {
      eyes: "눈1",
      value: "1",
    },
    {
      eyes: "눈2",
      value: "2",
    },
  ];

  return { Face1, Face2 };
};

export default useQuestion;
