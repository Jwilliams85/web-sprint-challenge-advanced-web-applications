import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddColor from "./components/AddColor";
import ContactForm from './components/ContactForm'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";
import PrivateRoute from "./components/utils/PrivateRoute";
import Bubbles from './components/Bubbles'
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />

        <PrivateRoute exact path = '/colors'><BubblePage/></PrivateRoute>
       
        <PrivateRoute exact path = '/list'><ColorList/></PrivateRoute>
      
        <PrivateRoute exact path = '/add'><AddColor/></PrivateRoute>

    {/* <Route exact path = '/contact'><ContactForm/></Route> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
