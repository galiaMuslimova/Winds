import React from "react";
import { ReactComponent as Menu } from "icons/Menu.svg";
import { ReactComponent as Arrow } from "icons/Arrow.svg";
import { StyledHeader, StyledText, StyledTextUnderlined } from "./Header.style";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Menu />
      <Arrow />
      <StyledTextUnderlined>Просмотр</StyledTextUnderlined>
      <StyledText>Управление</StyledText>
    </StyledHeader>
  );
};
