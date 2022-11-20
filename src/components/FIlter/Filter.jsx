import React from 'react';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label className={s.filterLabel}>
        Find contacts by name{' '}
        <input
          className={s.filterInput}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;
