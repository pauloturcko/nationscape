import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const SidebarFooterIcons = () => {
  return (
    <StyledIconsGroup>
      <StyledInstagramIcon />
      <StyledLinkedinIcon />
    </StyledIconsGroup>
  );
};

const StyledIconsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInstagramIcon = styled(FaInstagram)`
  color: ${({ theme }) => theme.colors.background};
  width: 1rem;
  height: 1rem;
`;

const StyledLinkedinIcon = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.background};
  width: 1rem;
  height: 1rem;
`;
