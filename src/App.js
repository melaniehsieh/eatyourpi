import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Search from "./layout/Sources/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
