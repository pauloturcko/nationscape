import styled from "styled-components";

type FilterDataInputProps = {
  placeholder: string;
};

export const FilterDataInput = ({ placeholder }: FilterDataInputProps) => {
  return <StyledInput placeholder={placeholder} />;
};

const StyledInput = styled.input`
  width: 80%;
  height: auto;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;
