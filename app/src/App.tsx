import { useState } from "react";
import { Headline } from "./styled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headline>Kurzovní lístek</Headline>
    </>
  );
}

export default App;
