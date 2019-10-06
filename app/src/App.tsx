import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar  } from 'components/Navbar';
import { IndexView } from 'views/IndexView';
import { GalleryView } from 'views/GalleryView';
import { AppContext, IAppContext } from 'context/AppContext';

import "../node_modules/bulma/css/bulma.min.css";
import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState<IAppContext>({
    color: '#000',
    borderRadius: 0,
    fontSize: 16,
    updateColor: color => updateColor(color),
    updateBorderRadius: radius => updateBorderRadius(radius),
    updateFontSize: fontSize => updateFontSize(fontSize),
  });
  const { Provider } = AppContext;

  function updateColor(color: string) { setState({ ...state, color }) }
  function updateBorderRadius(borderRadius: number) { setState({ ...state, borderRadius }) }
  function updateFontSize(fontSize: number) { setState({ ...state, fontSize }) }

  return (
    <Provider value={state}>
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
    </Provider>
  );
}

export default App;
