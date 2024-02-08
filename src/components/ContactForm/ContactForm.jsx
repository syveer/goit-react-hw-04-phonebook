import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const { name, number } = formData;
      onAddContact(name, number);
      setFormData({ name: '', number: '' });
    },
    [formData, onAddContact]
  );

  const { name, number } = formData;

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
