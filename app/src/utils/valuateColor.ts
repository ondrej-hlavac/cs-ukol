import { colors } from "../styled";

export const valuateColor = (value: number) => {
  switch (true) {
    case value < 0:
      return colors.NEGATIVE;
    case value > 0:
      return colors.POSITIVE;
    default:
      return "inherit";
  }
};
