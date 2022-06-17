import "./reset.css"
import "./assets/font/index.css"
import Text from "./elem/Text"
import ImageRegist from "./elem/ImageRegist";
import Button from "./elem/Button";
import Input from "./elem/Input";

function App() {
  return (
    <div className="App">
      <ImageRegist />
      <Text />
      <Button />
      <Input />
    </div>
  );
}

export default App;
