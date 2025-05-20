import React from "react";
import styled from "styled-components";
import type { Contact } from "../../../types/contact";
import Button from "../../atoms/Button";

interface Props {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

const Row = styled.tr``;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

const ContactRow: React.FC<Props> = ({ contact, onEdit, onDelete }) => {
  return (
    <Row>
      <Cell>{contact.id}</Cell>
      <Cell>{contact.name}</Cell>
      <Cell>{contact.email}</Cell>
      <Cell>{contact.phone}</Cell>
      <Cell>
        <ButtonGroup>
          <Button label="Edit" onClick={() => onEdit(contact)} />
          <Button label="Delete" onClick={() => onDelete(contact.id)} />
        </ButtonGroup>
      </Cell>
    </Row>
  );
};

export default ContactRow;
