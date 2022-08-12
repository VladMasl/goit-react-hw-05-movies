import { useState } from 'react';
import api from '../../resource/Api';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ setData, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams({ query });

    const data = async () => {
      try {
        const response = await api.search(query, 1);
        setData(response.results);
        setQuery('');
      } catch (error) {
        console.log(error);
      }
    };
    data();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChangeInput}
        className={s.input}
      />
      <button type="submit" className={s.button}>
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  setData: PropTypes.func,
  setSearchParams: PropTypes.func,
};
