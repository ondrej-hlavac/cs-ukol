import styled from "styled-components";
import { colors } from ".";

// FIXME: create fixed first column for responsive

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.3em;
  width: 100%;
  max-width: 730px;
  margin: 2em auto 0;

  thead {
    tr {
      height: 30px;
      th {
        text-align: center;
        color: ${colors.PRIMARY_LIGHT};
        font-weight: bold;
      }
    }
  }
  tbody {
    tr {
      height: 30px;
      background-color: ${colors.BACKGROUND};

      &:hover {
        background-color: ${colors.BACKGROUND_DARK};
      }

      th {
        padding: 0.4em;
        font-weight: lighter;
        border-top: 1px solid ${colors.SECONDARY_DARK};
        border-bottom: 1px solid ${colors.SECONDARY_DARK};

        &:first-child {
          border-left: 1px solid ${colors.SECONDARY_DARK};
        }

        &:last-child {
          border-right: 1px solid ${colors.SECONDARY_DARK};
        }
      }
    }
  }
`;
