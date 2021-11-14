import { combineReducers } from 'redux';
import { data } from '../data/data';
import { ADD, REMOVE, FILTER } from './types';

const initialState = [...data];

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case REMOVE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  // contactReducer,
  // filterReducer,
  items: contactReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
