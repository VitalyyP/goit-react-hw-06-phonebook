import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterContactAction } from '../../redux/actions';

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch();

  const filterContacts = event => {
    dispatch(filterContactAction(event.currentTarget.value));
  };

  return (
    <label>
      <p>Find contacts by name:</p>
      <input
        type="text"
        value={value}
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        onChange={filterContacts}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
