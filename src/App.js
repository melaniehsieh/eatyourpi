import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import Search from "./layout/Sources/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newsfeed" component={Search} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
