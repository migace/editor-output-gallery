import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar  } from 'components/Navbar';
import { IndexView } from 'views/IndexView';
import { GalleryView } from 'views/GalleryView';

import "../node_modules/bulma/css/bulma.min.css";
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="section">
        <div className="container">
          <Switch>
            <Route path="/gallery">
              <GalleryView />
            </Route>  
            <Route path="/">
              <IndexView />
            </Route>                  
          </Switch>
        </div>
      </div>      
    </Router>
  );
}

export default App;
