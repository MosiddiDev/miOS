import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import AppViewScreen from './Components/Screen';

// Views
import Terminal from './Views/Terminal';
// import Home from './Views/Home';
// import About from './Views/About';
// import Contact from './Views/Contact';


// <Route path="about" component={About}/>
// <Route path="contact" component={Contact}/>
var routes = (
  <Route path="/" component={AppViewScreen}>
    <IndexRoute component={Terminal} />
  </Route>
);

Router.run(routes, (Handler) => React.render(<Handler /> , document.body));
