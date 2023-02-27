import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import LocaleSelector from "./LocaleSelector";

const List = ({ data }) => {
  return (
    <Container>
      <Header />
      <ListWrapper>
        {data.map((el) => {
          return (
            <Link
              href={`/story/detail`}
              style={{
                textDecoration: "none",
              }}
            >
              <Item>
                <Thumb src={el.img} />
                <Content>
                  <Title>{el.title}</Title>
                  <Description>{el.contents}</Description>
                </Content>
              </Item>
            </Link>
          );
        })}
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 32px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  padding-top: 16px;
  background-color: #326e3f;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const IconPrev = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ListWrapper = styled.ul`
  padding: 30px 0;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Item = styled.li`
  display: flex;
  list-style-type: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 0.3rem rgb(0 0 0 / 15%);
  margin: 1.5rem 0;

  @media (max-width: 500px) {
    padding: 1rem 0.5rem;
    border-radius: 2px;
  }
`;

const Thumb = styled.div`
  width: 20%;
  aspect-ratio: 1;
  background: no-repeat url(${(props) => props.src}) center;
  background-size: contain;

  @media (max-width: 500px) {
    width: 40%;
  }
`;

const Content = styled.div`
  width: 80%;
  padding: 0 2rem;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 500px) {
    -webkit-line-clamp: 2;
  }
`;

export default List;
