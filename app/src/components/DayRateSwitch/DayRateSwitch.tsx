import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { dayRateSwitchStore } from "../../stores";
import { daysChange } from "../../constants";

import { DayRateSwitchStyled } from "./DayRateSwitch.styled";
import { Button } from "../../styled";

const DayRateSwitch: FC = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("moveDays");
    if (query) {
      dayRateSwitchStore.setMoveDays(parseInt(query));
    }
  }, [location]);

  const handleSetMoveDay = (dayNumber: number) => {
    dayRateSwitchStore.setMoveDays(dayNumber);
    navigate(`?moveDays=${dayNumber}`);
  };

  return (
    <DayRateSwitchStyled>
      {/* FIXME: this can be radio select */}
      {Object.keys(daysChange).map((dayChange: string) => {
        const dayNumber = parseInt(dayChange);
        return (
          <Button
            active={dayRateSwitchStore.moveDays === dayNumber}
            onClick={() => handleSetMoveDay(dayNumber)}
            key={`switch-btn-${dayChange}`}
          >
            {daysChange[dayNumber]}
          </Button>
        );
      })}
    </DayRateSwitchStyled>
  );
});

export default DayRateSwitch;
