import styled from "styled-components";
import "./reset.css"
import "./assets/font/index.css"
import Router from './Router';

function App() {
  return (
    <AppWrapper className="App">
      <Router />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f5f5f5;
  min-height: auto;
`

export default App;
