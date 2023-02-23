import styled from "styled-components";

const ImageContents = ({ img, text }) => {
  return (
    <>
      <ImageContainer>
        <img
          alt="title"
          width="100%"
          src={img}
          style={{ display: "block", margin: "0 auto" }}
        ></img>
      </ImageContainer>
      <Text>{text}</Text>
    </>
  );
};

const ImageContainer = styled.div``;

const Text = styled.div`
  padding-top: 20px;
  font-size: 1rem;
  line-height: 2rem;
`;

export default ImageContents;
