import styled from "styled-components";

const Indicator = () => {
  return (
    <Wrapper>
      <Button>
        <IconArrow
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          ></path>
        </IconArrow>
        <IconText>이전으로</IconText>
      </Button>
      <Button>
        <IconText>계속하기</IconText>
        <IconArrow
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </IconArrow>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6edd9;
  border-radius: 8px;
  padding: 4px;
`;

const IconText = styled.div`
  padding: 0 4px;
`;

const IconArrow = styled.svg`
  width: 1.5rem;
  cursor: pointer;
`;

export default Indicator;
