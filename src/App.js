import styled from 'styled-components';

const Parent = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`

const Btn = styled.button`
  cursor: pointer;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: aqua;
`;


function App() {
  return (
    <Parent>
      <Btn>button</Btn>
      <Btn as="anchor">anchor</Btn>

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
  
    </Parent>
  );
}

export default App;
