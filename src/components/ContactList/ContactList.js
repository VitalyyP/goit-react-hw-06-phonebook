import PropTypes from 'prop-types';
import Contact from '../Contact';

export default function ContactList({ getVisibleContacts }) {
  return (
    <ul>
      {getVisibleContacts().map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  getVisibleContacts: PropTypes.func,
};
