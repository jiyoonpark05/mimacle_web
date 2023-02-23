import styled from "styled-components";

const Contents = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 56rem;
  padding: 32px 0;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #f6edd9;
  border-radius: 16px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`;
export default Contents;
