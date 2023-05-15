import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './states/mainState'
import navReducer from './states/navState'
import singleCardReducer from './states/singleCardState'
import commentsReducer from './states/commentAreaState'
import singleCommentReducer from './states/singleCommentState'
import addCommentReducer from './states/addCommentState'
import commentListReducer from './states/commentListState'
import bookReducer from './states/bookDetailsState'
import appReducer from './states/appState'

const reducer = combineReducers({
  mainState: booksReducer,
  navState: navReducer,
  singleCardState: singleCardReducer,
  commentAreaState: commentsReducer,
  singleCommentState: singleCommentReducer,
  addCommentState: addCommentReducer,
  commentListState: commentListReducer,
  bookDetailsState: bookReducer,
  appState: appReducer
})
const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
