import types from './types';
import shortid from 'shortid';

const addContact = data => ({
  type: types.ADD,
  // if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
  //   alert(`You have already had ${data.name} in your contacts`);
  //   return;
  // }
  contact: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },

  // setContacts([contact, ...contacts]);
});
