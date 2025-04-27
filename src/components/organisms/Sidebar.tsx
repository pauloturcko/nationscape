import styled from "styled-components";
import { SidebarHeader } from "../atoms/SidebarHeader";
import { SidebarFooter } from "../molecules/SidebarFooter";
import { FilterDataInput } from "../atoms/FilterDataInput";
import { FilterDataSelect } from "../atoms/FilterDataSelect";
import { FilterByRegionEnum } from "../../enums/filter-by-region-enum";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [initialValue, setInitialValue] = useState<string[]>([]);

  useEffect(() => {
    const regionValues = Object.values(FilterByRegionEnum);
    setInitialValue(regionValues);
    console.log(regionValues);
  }, []);

  return (
    <StyledSidebar>
      <SidebarHeader />
      <FilterDataInput type="text" placeholder="Country" />
      <FilterDataSelect options={initialValue} />
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
