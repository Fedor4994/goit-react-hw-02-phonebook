import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './FIlter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const onSubmit = (name, number) => {
    const isRepeatedContact = contacts.find(contact => contact.name === name);

    if (isRepeatedContact) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { name, number, id: nanoid() },
      ]);
    }
  };

  const onFilterChange = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const onContactDelete = id => {
    setContacts(prevContacts => {
      if (prevContacts.length === 1) {
        localStorage.removeItem('contacts');
      }
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <div
      style={{
        height: '100%',
        padding: 10,
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm onAddContact={onSubmit} />
      </Section>

      <Section title={'Contacts'}>
        <Filter filter={filter} onChange={onFilterChange} />
        <Contacts
          onContactDelete={onContactDelete}
          contacts={getVisibleContacts()}
        />
      </Section>
    </div>
  );
};
