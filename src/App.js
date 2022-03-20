import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }

  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }

  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 100px;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 500px;
  height: 500px;
  animation: ${animation} 5s linear infinite;

  ${Emoji} {
    &:hover {
      font-size: 150px;
    }

    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="#eee">
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>🤔</Emoji>
    </Wrapper>
  );
}

export default App;