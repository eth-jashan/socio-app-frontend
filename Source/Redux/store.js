import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const presistAuth = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['uid', 'user']
  };
const rootReducer = combineReducers({ auth: persistReducer(presistAuth, authReducer) });
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);