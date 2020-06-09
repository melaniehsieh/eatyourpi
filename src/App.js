import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Home from "./layout/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Search from "./layout/Sources/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Search} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
