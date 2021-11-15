import { configureStore } from '@reduxjs/toolkit';
import contactsAllReducer from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsAllReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

//------------------- Without Redux Toolkit--------------------------

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

//-------------------------------------------------------------------
