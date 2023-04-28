import { useState } from "react";
import { AppStyled } from "./App.styled";

import { Headline } from "./styled";
import { Currencies, FavoriteCurrencies } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppStyled>
      <Headline>Kurzovní lístek</Headline>

      <FavoriteCurrencies />

      <Currencies />
    </AppStyled>
  );
}

export default App;
