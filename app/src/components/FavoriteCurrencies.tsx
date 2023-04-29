import React, { FC } from "react";
import { observer } from "mobx-react";
import { currencyStore } from "../stores";
import { ICurrency } from "../types";

import { CurrenciesTableHead } from ".";
import { Button, Subheadline, Table } from "../styled";

const FavoriteCurrencies: FC = observer(() => {
  console.log(JSON.stringify(currencyStore.favoriteCurrencies));

  // TODO: load from localstorage na useEffect a uložit do store

  if (currencyStore.favoriteCurrencies.length < 1) return null;

  const handleRemoveFavoriteCurrency = (shortName: string) => {
    // TODO: store in localstorage
    currencyStore.removeFavoriteCurrency(shortName);
  };

  return (
    <>
      <Subheadline>Vaše oblíbené</Subheadline>
      <Table>
        <CurrenciesTableHead />
        <tbody>
          {currencyStore.favoriteCurrencies.map((currency: ICurrency) => {
            const { shortName, country, buy, sell, cnb, move } = currency;

            return (
              <tr key={shortName}>
                <th>{shortName}</th>
                <th>{country}</th>
                <th>{buy}</th>
                <th>{sell}</th>
                <th>{cnb}</th>
                <th>{move}</th>
                <th>
                  <Button
                    variant="link"
                    onClick={() => handleRemoveFavoriteCurrency(shortName)}
                  >
                    Odebrat
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
});

export default FavoriteCurrencies;
