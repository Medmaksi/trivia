import React, {useContext, useEffect} from 'react';
import {Provider as AuthProvider} from '../src/context/AuthContext.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import StartScreen from "./screens/startScreen";
import QuestionsScreen from "./screens/questionsScreen";
import ResultScreen from "./screens/resultScreen";

const App = () => {
   return(
       <div>
           <BrowserRouter>
               <Switch>
                   <Route exact path="/" render={() => (
                       <StartScreen/>
                   )}/>
                   <Route exact path="/question/:id" render={() => (
                       <QuestionsScreen/>
                   )}/>
                   <Route exact path="/result" render={() => (
                       <ResultScreen/>
                   )}/>
               </Switch>
           </BrowserRouter>
       </div>
   )
}

export default () => {
  return (
      <AuthProvider>
        <App/>
      </AuthProvider>
  )
}