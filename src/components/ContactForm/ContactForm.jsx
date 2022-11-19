import React, { Component } from 'react';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    const onAddContact = this.props.onAddContact;
    const onChange = this.props.onChange;

    const contactName = this.props.name;
    const contactNumber = this.props.number;

    return (
      <form onSubmit={onAddContact} className={s.contactForm}>
        <label className={s.contactLabel}>
          Name
          <input
            className={s.contactInput}
            onChange={onChange}
            type="text"
            name="name"
            value={contactName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.contactLabel}>
          Number
          <input
            className={s.contactInput}
            onChange={onChange}
            type="tel"
            name="number"
            value={contactNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={s.submitButton}>
          Add contact
        </button>
      </form>
    );
  }
}
