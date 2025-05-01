import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Text = styled.span`
  font-size: 16px;
`;

const Label: React.FC<Props> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Label;
