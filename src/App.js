import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import GroceryList2 from "./Components/GroceryList2/GroceryList2";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import PrincipalList from './Components/CreatePrincipalList/PrincipalList';
import ShowPrincipalList from './Components/PrincipalList/ShowPrincipalList';


function App() {

  return (
    <div className="App">
      
      <div className='page-container'>
      <div className='content-wrapper'>
        <Router>

          <Header />

            <Route path="/" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/grocery-list" component={GroceryList} /> */}
            <Route path="/grocery-list2" component={GroceryList2} />
            <Route path="/edit-principal-list" component={PrincipalList} />
            <Route path="/principal-list" component={ShowPrincipalList} />

        </Router>
        </div>
        {/* <div className={classes.footer}> */}
          <Footer />
        {/* </div> */}

        </div>

    </div>
  );
}

export default App;
