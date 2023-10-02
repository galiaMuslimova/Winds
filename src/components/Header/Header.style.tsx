import { COLOR } from "constants/color";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${COLOR.menuBack};
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StyledText = styled.p`
  margin: 0;
  color: ${COLOR.mainText};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  line-height: 42px;
  padding: 0 4px;
`;

export const StyledTextUnderlined = styled(StyledText)`
  color: ${COLOR.white};
  border-bottom: 2px solid ${COLOR.white};
`;
