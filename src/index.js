import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store , persistor } from './features/smartstore/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import Spinner from './components/Spinner';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <Provider store={store}>
     <PersistGate loading={<Spinner />} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

