import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory} from 'react-router';

import AppViewScreen from './Components/Screen';

// Views
import Terminal from './Views/Terminal';
// import Home from './Views/Home';
// import About from './Views/About';
// import Contact from './Views/Contact';


// <Route path="about" component={About}/>
// <Route path="contact" component={Contact}/>
var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={AppViewScreen}>
            <IndexRoute component={Terminal} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.body);
