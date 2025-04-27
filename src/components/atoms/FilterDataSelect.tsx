import styled from "styled-components";

type FilterDataOptionsProps = {
  options: string[];
};

export const FilterDataSelect = ({ options }: FilterDataOptionsProps) => {
  return (
    <StyledSelect>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 80%;
  height: auto;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;
