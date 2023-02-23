import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Contents from "../common/Contents";
import ImageContents from "../detail/ImageContents";
import Quiz from "./Quiz";

const { default: LocaleSelector } = require("../common/LocaleSelector");

const Tutorial = () => {
  const router = useRouter();
  const { query } = router;
  const { seq } = query;

  return (
    <Container>
      <StickyHeader>
        <Link href={`/rules`}>
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
        <LocaleWrapper>
          <LocaleSelector />
        </LocaleWrapper>
      </StickyHeader>
      <Contents>
        <ImageContents
          img={"/img/contents/info_1.jpg"}
          text="text"
        ></ImageContents>
        <Quiz />
        <MoveToButtonContainer>
          <Button>
            {seq > 0 && (
              <>
                <IconArrow
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  ></path>
                </IconArrow>
                <IconText>이전으로</IconText>
              </>
            )}
          </Button>
          <Button>
            <IconText>계속하기</IconText>
            <IconArrow
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              ></path>
            </IconArrow>
          </Button>
        </MoveToButtonContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.section`
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

const MoveToButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
`;

const IconText = styled.div`
  padding: 0 12px;
`;

const IconArrow = styled.svg`
  width: 2.5rem;
  cursor: pointer;
`;

export default Tutorial;
