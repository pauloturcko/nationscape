import styled from "styled-components";
import { SidebarFooterIcons } from "../atoms/SidebarFooterIcons";

export const SidebarFooter = () => {
  return (
    <StyledFooterGroupElements>
      <StyledDevName>Desenvolvido por Paulo Turco</StyledDevName>
      <SidebarFooterIcons />
    </StyledFooterGroupElements>
  );
};

const StyledFooterGroupElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledDevName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  font-weight: 600;
`;
