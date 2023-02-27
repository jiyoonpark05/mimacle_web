import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import LocaleSelector from "../common/LocaleSelector";
import useOutsideClick from "../common/useOutside";

const Main = () => {
  const TILES = [
    { title: "sou", src: "/img/tile/suo1.png" },
    { title: "pin", src: "/img/tile/pin1.png" },
    { title: "man", src: "/img/tile/man1.png" },
    { title: "chun", src: "/img/tile/chun.png" },
    { title: "hatsu", src: "/img/tile/hatsu.png" },
    { title: "tong", src: "/img/tile/tong.png" },
  ];

  const DUMMY_MENU = [
    { category: "story", title_ko: "마작 이야기", title_en: "story" },
    { category: "rules", title_ko: "게임 설명", title_en: "rules" },
    {
      category: "combination",
      title_ko: "리치마작 역",
      title_en: "combination",
    },
    { category: "score", title_ko: "점수계산", title_en: "scoring" },
    { category: "majang_info", title_ko: "대탁 정보" },
  ];

  const supportLang = ["Korean", "English", "Jappaness", "Chinesse"];
  const [locale, setLocale] = useState("Korean");
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));
  const handleClickLocale = (lang) => {
    setLocale(lang);
    setOpen(false);
  };
  return (
    <Container>
      <NavWrapper>
        <LocaleSelector />
      </NavWrapper>
      <TitleWrapper>
        <Title alt="title" width="100%" src="/img/title.png" />
      </TitleWrapper>
      <MenuWrapper>
        {DUMMY_MENU.map((menu, idx) => {
          return (
            <Link href={`/${menu.category}`} style={{ textDecoration: "none" }}>
              <Menu>
                <img
                  alt={TILES[idx].title}
                  width="48px"
                  height="64px"
                  src={TILES[idx].src}
                />
                <MenuText>{menu.title_ko}</MenuText>
              </Menu>
            </Link>
          );
        })}
      </MenuWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 16px 32px 32px 32px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: right;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  padding: 36px 0 72px;
  @media (max-width: 500px) {
    padding: 16px 0 16px;
  }
`;

const Title = styled.img`
  display: block;
  max-width: 400px;
  padding: 18px 0 36px;
  margin: 0 auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin: 0 auto;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #f6edd9;
  border-radius: 8px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));

  :hover {
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  }
`;

const MenuText = styled.div`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-left: 16px;
`;
export default Main;
