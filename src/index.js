import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './Redux/store';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./Components/Firebase/firebase";
import { createFirestoreInstance } from "redux-firestore";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux/store";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { composeWithDevTools } from 'redux-devtools-extension';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';


const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })))
  );

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
//         attachAuthIsReady: true
// };

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="text-center">
        <div
          className="spinner-grow text-primary"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return children;
}

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
