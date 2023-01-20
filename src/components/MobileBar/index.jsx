import React from "react";
import { NAVBAR_ITEMS } from "../../data/NavbarData";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./MobileBarElement";

const Mobilebar = (props) => {
  const { handleSidebar, isOpen } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={handleSidebar}>
      <Icon onClick={handleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NAVBAR_ITEMS.map((item) => {
            return (
              <SidebarLink
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offset={-80}
                to={item.to}
                onClick={handleSidebar}
              >
                {item.label}
              </SidebarLink>
            );
          })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Mobilebar;
