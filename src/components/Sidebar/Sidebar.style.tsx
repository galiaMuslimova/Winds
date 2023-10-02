import { COLOR } from "constants/color";
import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: 234px;
  min-width: 234px;
  height: 100%;
  min-height: calc(100vh - 44px);
  background-color: ${COLOR.menuBack};
`;

export const StyledMenu = styled.div`
  height: 44px;
  border: 1px solid ${COLOR.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StyledTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.p`
  font-size: 14px;
  line-height: 16px;
`;

export const StyledSmallText = styled.p`
  font-size: 10px;
  line-height: 12px;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 32px;
  padding: 0 20px;
  color: ${COLOR.white};
`;
