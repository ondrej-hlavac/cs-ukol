import React, { FC, useState } from "react";
import { Button } from "../styled";
import { DayRateSwitchStyled } from "./DayRateSwitch.styled";

// FIXME: translations ( 0 výjimka, pak 1 den, 2, 3, 4 dny dle skloňování slovníku)
const daysChange: Record<number, string> = {
  0: "Aktuální",
  1: "+ 1 den",
  2: "+ 2 dny",
  3: "+ 3 dny",
};

const DayRateSwitch: FC = () => {
  const [days, setDays] = useState(0);

  return (
    <DayRateSwitchStyled>
      {/* FIXME: this can be radio select */}
      {Object.keys(daysChange).map((dayChange: string) => {
        const dayNumber = parseInt(dayChange);
        return (
          <Button
            active={days === dayNumber}
            onClick={() => setDays(dayNumber)}
            key={`switch-${dayChange}`}
          >
            {daysChange[dayNumber]}
          </Button>
        );
      })}
    </DayRateSwitchStyled>
  );
};

export default DayRateSwitch;
