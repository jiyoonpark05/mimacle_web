import { useState } from "react";
import styled from "styled-components";

const Quiz = ({ quiz }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <Tutorial>
      <Question>{quiz.question}</Question>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `no-repeat url(${quiz.img}) black center/98%`,
          backgroundSize: "contain",
        }}
      />
      <Options>
        {quiz.options.map((opt) => {
          return (
            <Item>
              <ItemImgae img={opt?.img}></ItemImgae>
              <Text>{opt?.text}</Text>
            </Item>
          );
        })}
      </Options>
    </Tutorial>
  );
};

const Tutorial = styled.div``;

const Question = styled.div`
  padding: 24px 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const Options = styled.ul`
  display: flex;
  flex: auto;
  width: 100%;
  min-height: 212px;
  max-height: 310px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding-inline-start: 0px;
  padding: 24px 0 48px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 12px 16px;
  background-color: #f6edd9;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  @keyframes hover-shake {
    50% {
      transform: translateX(3px) rotate(2deg);
    }
    100% {
      transform: translateX(-3px) rotate(-2deg);
    }
  }
  :focus,
  :active {
    animation: hover-shake 0.15s linear infinite;
  }

  @media (max-width: 500px) {
    padding: 4px 12px;
  }
`;

const ItemImgae = styled.div`
  width: 30%;
  aspect-ratio: 3/4;
  background: url(${(props) => props.img}) center 100% / contain;
`;

const Text = styled.div``;
export default Quiz;
