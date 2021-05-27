import React from 'react'
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import AddTask from './components/AddTask/AddTask';


export default function App(props) {

  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={AddTask}/>
          <Route component={NotFound}/> 
        </Switch>
      </Router> 
    </div>
  );
 
}



