import styled from 'styled-components';

const Parent = styled.div`
  display: flex;
`;

const FirstBox = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const SecondBox = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;


function App() {
  return (
    <Parent>
      <FirstBox>
        <Text>Hello</Text>
      </FirstBox>

      <SecondBox />
    </Parent>
  );
}

export default App;
