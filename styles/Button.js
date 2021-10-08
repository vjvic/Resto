import styled from "styled-components";

const handleBgColor = (color) => {
  const primary = "#d97706";
  const secondary = "#1783b0";

  switch (color) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    default:
      return "none";
  }
};

const handleSize = (size) => {
  switch (size) {
    case "sm":
      return "6px 26px";
    case "md":
      return "12px 28px";
    case "lg":
      return "12px 29px";
    default:
      return "none";
  }
};

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: ${({ round }) => (round ? "1000px" : null)};
  padding: ${({ size }) => handleSize(size)};
  background: ${({ color }) => handleBgColor(color)};
  color: #fff;
  width: 150px;
`;

export const BtnOutline = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  background: none;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ round }) => (round ? "1000px" : null)};
  transition: ${({ theme }) => theme.transition.ease};

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: #fff;
  }

  &:disabled {
    background: none;
    color: inherit;
  }
`;
