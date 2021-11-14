import { ADD, REMOVE, FILTER } from './types';

export const addContactAction = payload => ({ type: ADD, payload });
export const removeContactAction = payload => ({ type: REMOVE, payload });
export const filterContactAction = payload => ({ type: FILTER, payload });
