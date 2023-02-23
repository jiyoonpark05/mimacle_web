import { useState } from "react";
import styled from "styled-components";

const LocaleSelector = () => {
  const supportLang = ["Korean", "English", "Jappaness", "Chinesse"];
  const [locale, setLocale] = useState("Korean");
  const [open, setOpen] = useState(false);

  const handleClickLocale = (lang) => {
    setLocale(lang);
    setOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <svg
          fill="none"
          width="24px"
          stroke="#F6EDD9"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          ></path>
        </svg>
        <div onClick={() => setOpen(!open)}>{locale}</div>
      </Wrapper>
      <Menu isOpen={open}>
        {supportLang.map((lang) => {
          return <Item onClick={() => handleClickLocale(lang)}>{lang}</Item>;
        })}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #f6edd9;
  column-gap: 4px;
`;

const Menu = styled.div`
  display: none;
  position: fixed;
  width: 6rem;
  background-color: #f6edd9;
  border-radius: 8px;
  margin-top: 4px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  ${(props) => props.isOpen && `display : block`};
  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const Item = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
`;
export default LocaleSelector;
