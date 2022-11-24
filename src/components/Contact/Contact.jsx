import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ onContactDelete, contact }) => {
  const { name, number } = contact;

  return (
    <div className={s.contact}>
      <p>{`${name}: ${number}`}</p>
      <button
        onClick={() => onContactDelete(contact.id)}
        className={s.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
