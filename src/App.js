import React from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SwipePage from "./containers/SwipePage";
import ChatListPage from "./containers/ChatListPage";
import UserPage from "./containers/UserPage";
import ChatScreen from "./containers/ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route exact path="/" >
            <Header /> 
            <SwipePage />
            <Footer />
          </Route>
          
          <Route exact path="/chat" >
            <Header /> 
            <ChatListPage />
            <Footer />
          </Route>

          <Route path="/chat/:id" >
          <Header /> 
          <ChatScreen />
          <Footer />
          </Route>

          <Route path="/user" >
            <Header /> 
            <UserPage />
            <Footer />
          </Route>

          {/* 
          PARA TENER UN > EN EL HEADER 
          <Header backButton="/" /> 
          */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
