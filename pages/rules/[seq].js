import Detail from "@/components/common/Detail";

const TutorialPage = () => {
  const DUMMY_DATA = {
    seq: 0,
    title: "๐๏ธ ๋ง์ ๊ท์น",
    img: "/img/contents/doizi.gif",
    detail:
      "๋ง์์ ์ฉ์ ๋จธ๋ฆฌ์ ๋ชธํต์ ๋ง๋๋ ๊ฒ์์ด๋ค. ์ฉ์ ๊ฐ์ํจ 2๊ฐ๋ก ์ด๋ฃจ์ด์ง ๋จธ๋ฆฌ์ 3๊ฐ์ ํจ๋ก ๊ตฌ์ฑ๋ 4๊ฐ์ ๋ชธํต์ผ๋ก ์ด๋ฃจ์ด์ง๋ค.",
    quiz: {
      question: "Q. ๋น์นธ์ ๋ค์ด๊ฐ์ผ ํ๋ ํจ๋ฅผ ๊ณจ๋ผ์ฃผ์ธ์!!",
      img: "/doizi.png",
      options: [
        { text: "๋ต1", img: "/img/tile/suo1.png", is_answer: true },
        { img: "/img/tile/suo1.png", is_answer: false },
        { text: "๋ต2", img: "/img/tile/suo1.png", is_answer: false },
        { img: "/img/tile/suo1.png", is_answer: false },
      ],
    },
  };
  return <Detail type="tutorial" data={DUMMY_DATA} />;
};

export default TutorialPage;
