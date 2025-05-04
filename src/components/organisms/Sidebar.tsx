import styled from "styled-components";
import { SidebarHeader } from "../atoms/SidebarHeader";
import { SidebarFooter } from "../molecules/SidebarFooter";
import { FilterDataInput } from "../atoms/FilterDataInput";
import { FilterDataSelect } from "../atoms/FilterDataSelect";
import { FilterByRegionEnum } from "../../enums/filter-by-region-enum";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [initialRegionValue, setInitialRegionValue] = useState<string[]>([]);
  const [initialNameValue, setInitialNameValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(initialNameValue);
    }, 1500);

    return () => clearTimeout(timer);
  }, [initialNameValue]);

  useEffect(() => {
    if (!debouncedValue) return;

    console.log(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {}, [initialNameValue]);

  useEffect(() => {
    const regionValues = Object.values(FilterByRegionEnum);
    setInitialRegionValue(regionValues);
    console.log(regionValues);
  }, []);

  return (
    <StyledSidebar>
      <SidebarHeader />
      <FilterDataInput
        onChangeFunc={setInitialNameValue}
        value={initialNameValue}
        type="text"
        placeholder="Country"
      />
      <FilterDataSelect options={initialRegionValue} />
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
