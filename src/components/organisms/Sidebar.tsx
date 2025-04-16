import styled from "styled-components";
import { SidebarHeader } from "../atoms/SidebarHeader";
import { SidebarFooter } from "../molecules/SidebarFooter";
import { FilterDataInput } from "../atoms/FilterDataInput";
import { FilterDataSelect } from "../atoms/FilterDataSelect";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarHeader />
      <FilterDataInput placeholder="Country" />
      <FilterDataSelect />
      <SidebarFooter />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 22.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
