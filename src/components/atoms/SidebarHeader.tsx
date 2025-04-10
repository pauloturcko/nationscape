import styled from "styled-components";

export const SidebarHeader = () => {
  return (
    <StyledTitleDiv>
      <StyledTitle>Nationscape</StyledTitle>
    </StyledTitleDiv>
  );
};

const StyledTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.brand};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.75rem;
  font-weight: 500;
`;
