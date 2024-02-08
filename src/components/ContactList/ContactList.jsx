import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.contactListItem}>
        <div className={styles.contactInfo}>
          {contact.name}: {contact.number}
        </div>
        <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
          className={`${styles.deleteButton} ${styles.button}`}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
