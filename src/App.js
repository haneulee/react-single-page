import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Posts, About, MyPage, Search, NotFound } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route path="/render" render={() => <h3>Render Test</h3>} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
