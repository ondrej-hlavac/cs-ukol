import React, { FC } from "react";

const CurrenciesTableHead: FC = () => {
  return (
    <thead>
      <tr>
        <th>Měna</th>
        <th>Země</th>
        <th>Nákup</th>
        <th>Prodej</th>
        <th>ČNB</th>
        {/* TODO: update 1 den / 2 dny / 3 dny */}
        <th>Změna / 1 den</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default CurrenciesTableHead;
