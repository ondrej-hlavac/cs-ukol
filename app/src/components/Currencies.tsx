import React, { FC, Suspense } from "react";
import { observer } from "mobx-react";

import { CurrenciesTableHead, DayRateSwitch } from ".";

import { Button, Subheadline, Table } from "../styled";
import { currencyStore } from "../stores";
import { ICurrency } from "../types";

const Currencies: FC = observer(() => {
  const handleAddFavoriteCurrency = (shortName: string) => {
    // TODO: add to localstorage
    currencyStore.addFavoriteCurrency(shortName);
  };

  return (
    <>
      <Subheadline>Seznam všech kurzů</Subheadline>
      <DayRateSwitch />

      {/* FIXME: sorting + save to url */}

      <Table>
        <CurrenciesTableHead />

        <Suspense fallback={<>loading...</>}>
          <tbody>
            {currencyStore.currencyData.map((currency: ICurrency) => {
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
                      onClick={() => handleAddFavoriteCurrency(shortName)}
                    >
                      Oblíbená
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Suspense>
      </Table>
    </>
  );
});

export default Currencies;
