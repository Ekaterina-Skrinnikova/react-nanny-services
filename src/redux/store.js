import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import nanniesReducer from "../redux/nannies/slice";
import modalReducer from "../redux/modal/slice";
import authReducer from "../redux/users/slice";
import supportReducer from "../redux/support/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isLoggedIn"],
};

const nanniesPersistConfig = {
  key: "nannies",
  storage,
  whitelist: ["faivoritesListNannies", "image", "selectedItem"],
};

const modalPersistConfig = {
  key: "modal",
  storage,
  whitelist: ["selectedItem"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedNanniesReducer = persistReducer(
  nanniesPersistConfig,
  nanniesReducer
);
const persistedModalReducer = persistReducer(modalPersistConfig, modalReducer);

export const store = configureStore({
  reducer: {
    nannies: persistedNanniesReducer,
    modal: persistedModalReducer,
    auth: persistedAuthReducer,
    support: supportReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
