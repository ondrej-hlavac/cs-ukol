import React, { FC, Suspense } from "react";
import { observer } from "mobx-react";

import { CurrenciesTableHead, DayRateSwitch } from ".";

import { Button, Subheadline, Table, colors } from "../styled";
import { currencyStore, dayRateSwitchStore } from "../stores";
import { ICurrency } from "../types";
import { valuateColor } from "../utils";

const Currencies: FC = observer(() => {
  const handleAddFavoriteCurrency = (shortName: string) => {
    currencyStore.addFavoriteCurrency(shortName);
  };

  return (
    <section
      style={{
        backgroundColor: colors.BACKGROUND_LIGHT,
        marginTop: "5em",
        paddingBottom: "10em",
      }}
    >
      <Subheadline>Seznam všech kurzů</Subheadline>
      <DayRateSwitch />

      {/* FIXME: sorting + save to url */}

      <Table>
        <CurrenciesTableHead />

        <Suspense fallback={<>loading...</>}>
          {/* FIXME: create component for table body - component with forwarded action buttons*/}
          <tbody>
            {currencyStore.currencyData.map((currency: ICurrency) => {
              const { shortName, country, buy, sell, cnb, move } = currency;
              const isFavorite = currencyStore.favoriteCurrencyShortNames.some(
                (name) => name === shortName
              );
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
                    {!isFavorite && (
                      <Button
                        variant="link"
                        onClick={() => handleAddFavoriteCurrency(shortName)}
                      >
                        Oblíbená
                      </Button>
                    )}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Suspense>
      </Table>
    </section>
  );
});

export default Currencies;
