import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Header />
      <Content>
        <Counter count={count} increment={increment} />
        <Status />
      </Content>
    </>
  );
}

export default App;
