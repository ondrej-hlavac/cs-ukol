import { FC } from "react";
import { ICurrency } from "../types";
import { observer } from "mobx-react";
import { dayRateSwitchStore } from "../stores";
// import { Button } from "../styled";

interface CurrenciesTableBodyProps {
  currencies: ICurrency[];
  actionButtons: JSX.Element[];
}

// TODO: COMPONENT WIP !!! => unused

const CurrenciesTableBody: FC<CurrenciesTableBodyProps> = observer(
  ({ currencies, actionButtons }) => {
    return (
      <tbody>
        {currencies.map((currency: ICurrency) => {
          const { shortName, country, buy, sell, cnb, move } = currency;
          // const isFavorite = currencyStore.favoriteCurrencyShortNames.some(
          //   (name) => name === shortName
          // );
          const moveByDays = move + dayRateSwitchStore.moveDays * move;

          return (
            <tr key={shortName}>
              <th>{shortName}</th>
              <th>{country}</th>
              <th>{buy}</th>
              <th>{sell}</th>
              <th>{cnb}</th>
              <th>{moveByDays.toFixed(2)}</th>
              <th>
                {actionButtons.map((buttons) => buttons)}
                {/* {!isFavorite && (
                  <Button
                    variant="link"
                    onClick={() => handleAddFavoriteCurrency(shortName)}
                  >
                    Oblíbená
                  </Button>
                )} */}
              </th>
            </tr>
          );
        })}
      </tbody>
    );
  }
);

export default CurrenciesTableBody;
