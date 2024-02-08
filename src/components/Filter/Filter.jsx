import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <label className={styles.filterLabel}>
    {' '}
    Find contacts by name
    <input type="text" value={filter} onChange={onFilterChange} />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
