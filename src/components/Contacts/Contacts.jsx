import React, { Component } from 'react';
import s from './Contacts.module.css';

export default class Contacts extends Component {
  render() {
    const contacts = this.props.contacts;

    if (contacts.length) {
      return (
        <ul className={s.contactsList}>
          {contacts.map(contact => (
            <li className={s.contact} key={contact.id}>
              <p>{`${contact.name}: ${contact.number}`}</p>
            </li>
          ))}
        </ul>
      );
    }
    return 'No contacts here yet';
  }
}
