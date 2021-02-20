import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Liked from './pages/Liked';
import Exit from './pages/Exit';
import Navbar from './navbar/Navbar'
import Search from './pages/Search';
import Auth from './auth/Auth'


function App() {
  return (
    <>
      <Router>
        <Route path="/auth" component={Auth} />
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/liked" component={Liked}/>
            <Route path="/exit" component={Exit}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;


