import { COLOR } from "constants/color";
import styled from "styled-components";

export const StyledApp = styled.div`
  color: ${COLOR.mainText};
`;

export const StyledMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledTableBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
