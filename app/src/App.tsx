import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar  } from 'components/Navbar';
import { IndexView } from 'views/IndexView';
import { GalleryView } from 'views/GalleryView';
import { AppProvider } from 'context/AppContext';
import { reducer } from 'reducer';

import "../node_modules/bulma/css/bulma.min.css";
import './App.css';

const App: React.FC = () => {
  const defaultState = {
    backgroundColor: '#FF0000',
    fontSize: 16,
    borderRadius: 0
  };

  return (
    <AppProvider initialState={defaultState} reducer={reducer}>
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
    </AppProvider>
  );
}

export default App;
