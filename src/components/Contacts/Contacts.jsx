import React, { Component } from 'react';
import s from './Contacts.module.css';
import Contact from 'components/Contact/Contact';

export default class Contacts extends Component {
  render() {
    const contacts = this.props.contacts;
    const onContactDelete = this.props.onContactDelete;

    if (contacts.length) {
      return (
        <ul className={s.contactsList}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact onContactDelete={onContactDelete} contact={contact} />
            </li>
          ))}
        </ul>
      );
    }
    return 'There are no contacts';
  }
}
