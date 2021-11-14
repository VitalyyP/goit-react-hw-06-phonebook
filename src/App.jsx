import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container';
import { addContactAction } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const addContact = data => {
    if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`You have already had ${data.name} in your contacts`);
      return;
    }
    const contact = {
      id: Date.now(),
      name: data.name,
      number: data.number,
    };
    dispatch(addContactAction(contact));
  };

  const [filter, setFilter] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form addContact={addContact} />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter value={filter} onChange={handleInputChange} />
      <ContactList contacts={contacts} getVisibleContacts={getVisibleContacts} />
    </Container>
  );
}

export default App;
