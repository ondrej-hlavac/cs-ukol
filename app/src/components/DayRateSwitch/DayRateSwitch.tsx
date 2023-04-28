import React, { FC } from "react";
import { observer } from "mobx-react";

import { dayRateSwitchStore } from "../../stores";
import { daysChange } from "../../constants";

import { DayRateSwitchStyled } from "./DayRateSwitch.styled";
import { Button } from "../../styled";

const DayRateSwitch: FC = observer(() => {
  return (
    <DayRateSwitchStyled>
      {/* FIXME: this can be radio select */}
      {Object.keys(daysChange).map((dayChange: string) => {
        const dayNumber = parseInt(dayChange);
        return (
          <Button
            active={dayRateSwitchStore.moveDays === dayNumber}
            onClick={() => dayRateSwitchStore.setMoveDays(dayNumber)}
            key={`switch-${dayChange}`}
          >
            {daysChange[dayNumber]}
          </Button>
        );
      })}
    </DayRateSwitchStyled>
  );
});

export default DayRateSwitch;
