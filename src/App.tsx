import React, { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const mockData: Contact[] = [
  {
    id: 1,
    name: 'Micheal',
    email: 'micheal@gmail.com',
    phone: '456-145-2334',
	address: 'NewYork',
  },
  {
    id: 2,
    name: 'Adam',
    email: 'adam@gmail.com',
    phone: '987-234-7851',
	address: 'London',
  },
  {
    id: 3,
    name: 'Nguyen Lam',
    email: 'nglam@gmail.com',
    phone: '354-126-8521',
	address: 'VungTau City',
  },
  {
    id: 4,
    name: 'Nguyen Thoai',
    email: 'ngthoai@gmail.com',
    phone: '696-126-7454',
	address: 'Hanoi City',
  },
  {
    id: 5,
    name: 'Dang Vu Lam',
    email: 'dagvulam@gmail.com',
    phone: '756-126-8888',
	address: 'HoChiMinh City',
  }
];

const ContactListApp: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockData);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <h1>Contact List</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredContacts.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => handleSelectContact(contact)}
              style={{ cursor: 'pointer' }}
            >
              {contact.name}
            </li>
          ))}
        </ul>
      )}

      {filteredContacts.length > 0 &&selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
		  <p>Address: {selectedContact.address}</p>
        </div>
      )}

      {/* Clear the contact details when no contact is selected */}
      {!selectedContact && filteredContacts.length === 0 && (
        <div>
          <h2>Contact Details</h2>
          <p>No contact selected</p>
        </div>
      )}
    </div>
  );
};

export default ContactListApp;
