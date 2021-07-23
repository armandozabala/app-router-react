import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {
  return (
    <Router>
         <div className="container">
            <h1>Nav</h1>
                <div className="btn-group">
                    <NavLink to="/" className="btn btn-dark" activeClassName="active">
                        Inicio
                    </NavLink>
                    <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
                        Nosotros
                    </NavLink>
                    <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
                        Contactos
                    </NavLink>
                </div>
            <hr/>
            <Switch>
                <Route path="/nosotros/:id">
                     <User/>
                </Route>
                <Route path="/nosotros">
                     <Nosotros/>
                </Route>
                <Route path="/contacto">
                     <Contacto/>
                </Route>
                <Route path="/nosotros">
                     <Nosotros/>
                </Route>
                <Route path="/">
                      <Inicio/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
