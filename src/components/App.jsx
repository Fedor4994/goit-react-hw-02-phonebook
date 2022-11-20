import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './FIlter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (name, number) => {
    const { contacts } = this.state;
    const updatebleContacts = contacts;

    const repeatedContact = updatebleContacts.find(
      contact => contact.name === name
    );

    if (repeatedContact) {
      alert(`${name} is already in contacts`);
    } else {
      updatebleContacts.push({
        name,
        number,
        id: nanoid(),
      });

      this.setState({
        contacts: updatebleContacts,
      });
    }
  };

  onFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  onContactDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100%',
          padding: 10,
        }}
      >
        <Section title={'Phonebook'}>
          <ContactForm onAddContact={this.onSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Filter filter={filter} onChange={this.onFilterChange} />
          <Contacts
            onContactDelete={this.onContactDelete}
            contacts={visibleContacts}
          />
        </Section>
      </div>
    );
  }
}