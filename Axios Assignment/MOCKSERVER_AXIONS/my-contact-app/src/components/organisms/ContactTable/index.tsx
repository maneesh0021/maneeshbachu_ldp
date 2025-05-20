import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Wrapper = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #aaa;
  min-width: 150px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0052cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #003d99;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Head = styled.thead`
  background-color: #f2f2f2;
`;

const Row = styled.tr``;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const HeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
`;

// Main Component
const ContactTable: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [formContact, setFormContact] = useState<Contact>({
    id: 0,
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await axios.get<Contact[]>("http://localhost:3000/contacts");
      setContacts(res.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error fetching contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Throttle search
  useEffect(() => {
    const handler = setTimeout(() => {
      if (search.trim() === "") {
        fetchContacts();
      } else {
        const filtered = contacts.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        );
        setContacts(filtered);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [contacts, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!formContact.name || !formContact.email || !formContact.phone) {
      alert("Please fill all fields");
      return;
    }
    try {
      await axios.post("http://localhost:3000/contacts", {
        name: formContact.name,
        email: formContact.email,
        phone: formContact.phone,
      });
      setFormContact({ id: 0, name: "", email: "", phone: "" });
      fetchContacts();
    } catch {
      alert("Failed to add contact");
    }
  };

  const handleEdit = (contact: Contact) => {
    setFormContact(contact);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!formContact.name || !formContact.email || !formContact.phone) {
      alert("Please fill all fields");
      return;
    }
    try {
      await axios.put(
        `http://localhost:3000/contacts/${formContact.id}`,
        formContact
      );
      setFormContact({ id: 0, name: "", email: "", phone: "" });
      setIsEditing(false);
      fetchContacts();
    } catch {
      alert("Failed to update contact");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      fetchContacts();
    } catch {
      alert("Failed to delete contact");
    }
  };

  const handleCancel = () => {
    setFormContact({ id: 0, name: "", email: "", phone: "" });
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <Title>Contact Manager</Title>

      <FormRow>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formContact.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formContact.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formContact.phone}
          onChange={handleChange}
        />
        {isEditing ? (
          <>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleCancel} style={{ backgroundColor: "#999" }}>
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={handleAdd}>Add</Button>
        )}
      </FormRow>

      <Input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}
      />

      <Table>
        <Head>
          <Row>
            <HeaderCell>S. No</HeaderCell>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Email</HeaderCell>
            <HeaderCell>Phone</HeaderCell>
            <HeaderCell>Actions</HeaderCell>
          </Row>
        </Head>
        <tbody>
          {contacts.length === 0 ? (
            <Row>
              <Cell colSpan={5}>No contacts found.</Cell>
            </Row>
          ) : (
            contacts.map((contact, index) => (
              <Row key={contact.id}>
                <Cell>{index + 1}</Cell>
                <Cell>{contact.name}</Cell>
                <Cell>{contact.email}</Cell>
                <Cell>{contact.phone}</Cell>
                <Cell>
                  <Button
                    onClick={() => handleEdit(contact)}
                    style={{ marginRight: "8px", backgroundColor: "#007bff" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(contact.id)}
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    Delete
                  </Button>
                </Cell>
              </Row>
            ))
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ContactTable;
