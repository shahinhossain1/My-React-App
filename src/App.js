import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './Add';
import BlogDetails from './BlogDetails';
import About from './About';
import Contact from './Contact';

function App() {
    
  //const title = "Welcome to my React project";
  //const likes = 20+20+10;

  return (
    <Router>

    <div className="App">
      <Navbar />
      
      <div className="content">

        <Switch>

         <Route exact path= "/"> <Home/> </Route>
         <Route path= "/add"> <Add/> </Route>
         <Route path= "/blogs/:id"> <BlogDetails/> </Route>
         <Route path= "/about"> <About/> </Route>
         <Route path= "/contact"> <Contact/> </Route>
         <Route path= "*"> <Home/> </Route>

        </Switch>

      </div>
    </div>

    </Router>
  );
}

export default App;
