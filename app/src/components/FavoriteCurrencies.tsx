import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";

import { currencyStore, dayRateSwitchStore } from "../stores";
import { valuateColor } from "../utils";
import { ICurrency } from "../types";

import { Button, Subheadline, Table } from "../styled";
import { CurrenciesTableHead } from ".";

const FavoriteCurrencies: FC = observer(() => {
  useEffect(() => {
    currencyStore.loadFavoritesFromStorage();
  }, []);

  if (currencyStore.favoriteCurrencies.length < 1) return null;

  const handleRemoveFavoriteCurrency = (shortName: string) => {
    currencyStore.removeFavoriteCurrency(shortName);
  };

  return (
    <>
      <Subheadline>Vaše oblíbené</Subheadline>
      <Table>
        <CurrenciesTableHead />
        {/* FIXME: create component for table body - component with forwarded action buttons => same component Currencies*/}
        <tbody>
          {currencyStore.favoriteCurrencies.map((currency: ICurrency) => {
            const { shortName, country, buy, sell, cnb, move } = currency;
            const moveByDays = move + dayRateSwitchStore.moveDays * move;

            return (
              <tr key={shortName}>
                <th>{shortName}</th>
                <th>{country}</th>
                <th>{buy}</th>
                <th>{sell}</th>
                <th>{cnb}</th>
                <th style={{ color: valuateColor(moveByDays) }}>
                  {moveByDays.toFixed(2)}
                </th>
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
