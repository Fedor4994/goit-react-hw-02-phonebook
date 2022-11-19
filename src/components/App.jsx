import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  onSubmit = event => {
    event.preventDefault();

    const inputValue = event.target.elements.name.value;
    const inputNumber = event.target.elements.number.value;
    const visualContacts = this.state.contacts;

    visualContacts.push({
      name: inputValue,
      number: inputNumber,
      id: nanoid(),
    });

    this.setState({
      contacts: visualContacts,
    });

    this.reset();
  };

  onChange = event => {
    const inputName = event.target.name;

    this.setState({
      [inputName]: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const contacts = this.state.contacts;
    const contactName = this.state.name;
    const contactNumber = this.state.number;

    return (
      <div
        style={{
          height: '100%',
          padding: 10,
        }}
      >
        <Section title={'Phonebook'}>
          <ContactForm
            number={contactNumber}
            name={contactName}
            onChange={this.onChange}
            onAddContact={this.onSubmit}
          />
        </Section>

        <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section>
      </div>
    );
  }
}
