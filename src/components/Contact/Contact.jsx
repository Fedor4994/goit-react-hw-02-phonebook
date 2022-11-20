import React, { Component } from 'react';
import s from './Contact.module.css';

class Contact extends Component {
  handleDelete = () => {
    const contactId = this.props.contact.id;
    this.props.onContactDelete(contactId);
  };

  render() {
    const {
      contact: { name, number },
    } = this.props;

    return (
      <div className={s.contact}>
        <p>{`${name}: ${number}`}</p>
        <button onClick={this.handleDelete} className={s.deleteButton}>
          Delete
        </button>
      </div>
    );
  }
}

export default Contact;
