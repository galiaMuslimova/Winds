import { COLOR } from "constants/color";
import styled from "styled-components";

export const StyledTableHead = styled.div`
  height: 44px;
  width: 100%;
  background-color: ${COLOR.menuBack};
  border-bottom: 1px solid ${COLOR.border};
  box-sizing: border-box;
`;

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  border-right: 1px solid ${COLOR.border};
  font-size: 18px;
  color: ${COLOR.white};
`;
