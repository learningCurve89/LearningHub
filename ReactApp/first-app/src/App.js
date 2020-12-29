import React from 'react';
import NavbarMain from './components/NavbarMain';
import {BrowserRouter as Router} from 'react-router-dom' ;
import Route from 'react-router-dom/Route' ;
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css'
import Home from './components/Home';
import About from './components/About';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import Styling from './components/Styling';
import University from './components/University';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <NavbarMain />
        <Route path="/home" render={
          ()=> {return(<Home />) }
        }/>
        <Route path="/about" render={
          ()=> {return(<About />) }
        }/>
        <Route path="/backend" render={
          ()=> {return(<Backend />) }
        }/>
        <Route path="/frontend" render={
          ()=> {return(<Frontend />) }
        }/>
        <Route path="/styling" render={
          ()=> {return(<Styling />) }
        }/>
      </div>
      <Route path="/university" render={
          ()=> {return(<University />) }
        }/>
      </Router>
    )
  }
}
export default App;
