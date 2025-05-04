import styled from "styled-components";

type FilterDataInputProps = {
  placeholder: string;
  type: string;
  value: string;
  onChangeFunc: (value: string) => void;
};

export const FilterDataInput = ({
  placeholder,
  type,
  value,
  onChangeFunc,
}: FilterDataInputProps) => {
  return (
    <StyledInput
      onChange={(e) => onChangeFunc(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
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
