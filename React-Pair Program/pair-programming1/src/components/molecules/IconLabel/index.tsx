import React from "react";
import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label";
import styled from "styled-components";

interface Props {
  icon: string;
  text: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconLabel: React.FC<Props> = ({ icon, text }) => {
  return (
    <Container>
      <Icon src={icon} />
      <Label text={text} />
    </Container>
  );
};

export default IconLabel;
