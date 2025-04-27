import styled from "styled-components";

type FilterDataInputProps = {
  placeholder: string;
  type: string;
};

export const FilterDataInput = ({
  placeholder,
  type,
}: FilterDataInputProps) => {
  return <StyledInput type={type} placeholder={placeholder} />;
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
