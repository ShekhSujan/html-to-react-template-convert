import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <div className="App">
      
            <Router>
              <Switch>
                <PublicRoute path="/" name="Home" />
              </Switch>
          </Router>
    
    </div>
  );
}

export default App;
