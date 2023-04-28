import React, { FC } from "react";
import { Subheadline, Table } from "../styled";
import { DayRateSwitch } from ".";

const Currencies: FC = () => {
  return (
    <>
      <Subheadline>Seznam všech kurzů</Subheadline>
      <DayRateSwitch />
      <Table>
        <thead>
          <tr>
            <th>Měna</th>
            <th>Země</th>
            <th>Nákup</th>
            <th>Prodej</th>
            <th>ČNB</th>
            <th>Změna / 1 den</th>
            <th></th> {/* action column */}
            {/* TODO: update 1 den / 2 dny / 3 dny */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Měna</th>
            <th>Země</th>
            <th>Nákup</th>
            <th>Prodej</th>
            <th>ČNB</th>
            <th>Změna / 1 den</th>
            <th>button</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Currencies;
