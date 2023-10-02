import React from "react";
import {
  StyledList,
  StyledListItem,
  StyledMenu,
  StyledSidebar,
  StyledSmallText,
  StyledText,
  StyledTextGroup,
} from "./Sidebar.style";
import { ReactComponent as Chevron } from "icons/Chevron.svg";
import { ReactComponent as ListIcon } from "icons/ListIcon.svg";
import { sidebarList } from "./Sidebar.service";

export const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <StyledMenu>
        <StyledTextGroup>
          <StyledText>Название проекта</StyledText>
          <StyledSmallText>Аббревиатура</StyledSmallText>
        </StyledTextGroup>
        <Chevron />
      </StyledMenu>
      <StyledList>
        {sidebarList.map((item) => (
          <StyledListItem key={item.id}>
            <ListIcon />
            {item.name}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSidebar>
  );
};
