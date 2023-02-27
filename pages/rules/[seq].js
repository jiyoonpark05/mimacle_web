import Detail from "@/components/common/Detail";

const TutorialPage = () => {
  const DUMMY_DATA = {
    seq: 0,
    title: "🀄️ 마작 규칙",
    img: "/img/contents/doizi.gif",
    detail:
      "마작은 용의 머리와 몸통을 만드는 게임이다. 용은 같은패 2개로 이루어진 머리와 3개의 패로 구성된 4개의 몸통으로 이루어진다.",
    quiz: {
      question: "Q. 빈칸에 들어가야 하는 패를 골라주세요!!",
      img: "/doizi.png",
      options: [
        { text: "답1", img: "/img/tile/suo1.png", is_answer: true },
        { img: "/img/tile/suo1.png", is_answer: false },
        { text: "답2", img: "/img/tile/suo1.png", is_answer: false },
        { img: "/img/tile/suo1.png", is_answer: false },
      ],
    },
  };
  return <Detail type="tutorial" data={DUMMY_DATA} />;
};

export default TutorialPage;
