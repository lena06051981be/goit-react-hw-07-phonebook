import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts']
//   //     or
//   // blacklist: ['filter'],
// };




// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
  
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// })

// export const persistor = persistStore(store);