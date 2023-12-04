import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<p>Loading...</p>} persistor={persistor}> */}
      <BrowserRouter basename="/planner">
        {' '}
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
