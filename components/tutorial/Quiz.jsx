import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Quiz = ({ seq }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(); //캔버스 컨텍스트를 useState로 상태관리

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
    ctx.strokeStyle = "green";
    ctx.strokeRect(20, 10, 160, 100);
  }, []);

  return (
    <Container>
      <Canvas id="tutorial_0" ref={canvasRef}></Canvas>
    </Container>
  );
};

const Container = styled.div``;

const Canvas = styled.canvas`
  width: 100%;
  height: 600px;
  background-color: white;
`;

export default Quiz;
