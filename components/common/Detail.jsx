import Link from "next/link";
import styled from "styled-components";
import Quiz from "../tutorial/Quiz";
import Header from "./Header";
import Indicator from "./Indicator";

const Detail = ({ type, data }) => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>{data.title}</Title>
        <Image width="100%" src={data.img}></Image>
        <Contents>{data.detail}</Contents>
        {type === "tutorial" && (
          <div>
            <div>만들어 볼까요??</div>
            <Quiz quiz={data.quiz} />
          </div>
        )}
        <Indicator />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  padding: 0 32px;
  margin: 0 auto;
  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const Wrapper = styled.div`
  padding: 1.5rem 0;
`;

const Title = styled.h1`
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 680px;
  aspect-ratio: 4/3;
  background: no-repeat url(${(props) => props.src}) center 100% / contain;
  margin: 0 auto;
`;

const Contents = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  padding-top: 1rem;
`;

export default Detail;
