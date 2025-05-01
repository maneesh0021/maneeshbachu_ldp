import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
}

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Icon: React.FC<Props> = ({ src }) => {
  return <Img src={src} />;
};

export default Icon;
