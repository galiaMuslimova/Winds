import { COLOR } from "constants/color";
import styled, { css } from "styled-components";

export const StyledTr = styled.tr`
  height: 60px;
  border-bottom: 1px solid ${COLOR.border};
  cursor: pointer;
`;

export const StyledTd = styled.td`
  padding: 0 12px;
  color: ${COLOR.white};
`;

export const StyledLevelTd = styled(StyledTd)<{ level: number }>`
  position: relative;

  ${({ level }) =>
    css`
      padding-left: ${12 + (level - 1) * 20}px;
    `}
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${COLOR.border};
  background: transparent;
  padding: 10px;
  box-sizing: border-box;
  color: ${COLOR.textGray};
`;

export const StyledIconGroup = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
  position: relative;
  border-radius: 6px;
  padding: 2px 6px;

  ${StyledLevelTd}:hover & {
    background-color: ${COLOR.border};
  }
`;

export const StyledBucket = styled.div`
  display: none;
  ${StyledLevelTd}:hover & {
    display: inline-block;
  }
`;

export const StyledLevelPath = styled.div`
  position: absolute;
  left: -2px;
`;
