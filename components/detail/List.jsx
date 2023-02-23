import Link from "next/link";
import styled from "styled-components";

const { default: LocaleSelector } = require("../common/LocaleSelector");

const List = ({ category }) => {
  const DUMMY_LIST = [
    {
      title: "#0 INTRODUCTION",
      items: [
        { title_ko: "기본 개념" },
        { title_ko: "마작패 종류" },
        { title_ko: "기마작패 유형" },
      ],
    },
    {
      title: "#1 Basics",
      items: [{ title_ko: "치" }, { title_ko: "펑" }, { title_ko: "깡" }],
    },
    {
      title: "#2 Combination",
      items: [
        { title_ko: "마작역" },
        { title_ko: "텐파이" },
        { title_ko: "리치" },
      ],
    },
  ];
  return (
    <Container>
      <StickyHeader>
        <Link href={`/`}>
          <IconPrev
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            color="#f6edd9"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </IconPrev>
        </Link>
        <LocaleWrapper className="relative flex flex-col float-right cursor-pointer">
          <LocaleSelector />
        </LocaleWrapper>
      </StickyHeader>
      <div>content</div>
      <TutorialCotainer>
        {DUMMY_LIST.map((cat) => {
          return (
            <TutorialCard>
              <TutorialCardHeader>{cat.title}</TutorialCardHeader>
              {cat.items.map((item, idx) => {
                return (
                  <TitleLink href={`/rules/tutorial/${idx}`}>
                    <TutorialTitle isFinished={false}>
                      {idx + 1}. {item.title_ko}
                    </TutorialTitle>
                  </TitleLink>
                );
              })}
            </TutorialCard>
          );
        })}
      </TutorialCotainer>
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

const LocaleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  float: right;
`;

const TutorialCotainer = styled.div``;

const TutorialCard = styled.div`
  margin-top: 50px;
  border-radius: 0.5rem;
  border-color: rgb(17 24 39);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0/0.1),
    0 1px 2px -1px rgb(0 0 0/0.1);
  overflow: hidden;
  @media (min-width: 500px) {
    border-radius: 0.375rem;
  }
`;

const TutorialCardHeader = styled.div`
  padding: 0.8rem;
  color: black;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: #f6edd9;
`;

const TitleLink = styled.a`
  text-decoration: none;
`;

const TutorialTitle = styled.div`
  padding: 1rem 1.5rem;
  color: ${(props) => (props.isFinished ? `#9FAFA1` : `black`)};
  background-color: ${(props) =>
    props.isFinished ? `transparent` : `#f6edd9b3`};
  cursor: pointer;
`;

export default List;
