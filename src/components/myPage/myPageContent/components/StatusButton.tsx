import React from "react";

import styled from "styled-components";
import fonts from "../../../../styles/fonts";

interface Props {
  buttonValue: string;
  border: string;
  onClick: any;
}

interface iBorderBottom {
  theme: string;
  border: any;
}

const StatusButton = ({ buttonValue, border, onClick }: Props) => {
  return (
    <Button onClick={onClick} border={border}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.div`
  margin-right: 4.5rem;

  ${fonts.Body1}
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;

  border-bottom: ${({ theme, border }: iBorderBottom) =>
    `0.3rem solid ${theme[border]}`};
  cursor: pointer;
  &:hover {
    border-bottom: ${({ theme }) => `0.3rem solid ${theme.subColor1}`};
  }
`;

export default StatusButton;
