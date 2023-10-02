import { COLOR } from "constants/color";
import styled from "styled-components";

export const StyledTableWrap = styled.div`
  height: 100%;
  min-height: calc(100vh - 88px);
  width: 100%;
  background-color: ${COLOR.tableBack};
  box-sizing: border-box;
  padding: 0 4px;
`;

export const StyledTable = styled.table`
  height: 100%;
  width: 100%;
  background-color: ${COLOR.tableBack};
  border-collapse: collapse;
`;

export const StyledTr = styled.tr`
  height: 44px;
  border-bottom: 1px solid ${COLOR.border};
`;

export const StyledTh = styled.th`
  padding: 0 12px;
  text-align: start;
  width: 200px;
  min-width: 200px;

  &:first-child {
    min-width: 110px;
    width: 110px;
  }

  &:nth-child(2) {
    width: 100%;
  }
`;
