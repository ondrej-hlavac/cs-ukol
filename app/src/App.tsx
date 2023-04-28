import { useEffect } from "react";
import { observer } from "mobx-react";

import { Currencies, FavoriteCurrencies } from "./components";
import { currencyStore } from "./stores";

import { AppStyled } from "./App.styled";
import { Headline } from "./styled";

export const App = observer(() => {
  useEffect(() => {
    currencyStore.loadData();
  }, []);

  console.log("currencyStore", JSON.stringify(currencyStore.currencyData));

  return (
    <AppStyled>
      <Headline>Kurzovní lístek</Headline>

      <FavoriteCurrencies />

      <Currencies />
    </AppStyled>
  );
});
