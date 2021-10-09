import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({target}) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={inputValue}
          placeholder="Buscar Gifs"
          onChange={handleChange}
        />
        <p className="search-icon" onClick={handleSubmit}>{'\u26B2'}</p>
      </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
