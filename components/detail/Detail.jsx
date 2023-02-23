import Link from "next/link";
import styled from "styled-components";
import Contents from "../common/Contents";
import ImageContents from "./ImageContents";

const { default: LocaleSelector } = require("../common/LocaleSelector");

const Detail = () => {
  return (
    <DetailContainer>
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
      <Contents>
        <ImageContents />
      </Contents>
    </DetailContainer>
  );
};

const DetailContainer = styled.section`
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

export default Detail;
