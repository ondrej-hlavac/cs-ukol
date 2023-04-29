import { FC } from "react";
import { observer } from "mobx-react";
import { daysCount } from "../constants/days";
import { dayRateSwitchStore } from "../stores";

const CurrenciesTableHead: FC = observer(() => {
  return (
    <thead>
      <tr>
        <th>Měna</th>
        <th>Země</th>
        <th>Nákup</th>
        <th>Prodej</th>
        <th>ČNB</th>
        <th>Změna / {daysCount[dayRateSwitchStore.moveDays]}</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
});

export default CurrenciesTableHead;
