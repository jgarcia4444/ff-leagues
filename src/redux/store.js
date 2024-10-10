import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./reducers/rootReducer";

const migrations = {
    0: (state) => {
        return {
            ...state,
        }
    }
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Users', 'Rosters'],
    version: 0,
    migrate: createMigrate(migrations, {debug: false})
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});
const persistor = persistStore(store);

export default {
    store,
    persistor
};