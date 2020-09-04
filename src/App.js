import React from 'react';
import classes from './App.module.scss';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import Cars from './Cars/Cars';
import About from "./About/About";
import CarDetail from "./CarDetail/CarDetail";

class App extends React.Component {

   state = {
      isLoggedIn: false
   };

   render() {
      return (
         <div className={classes.App}>
            <nav className={classes.nav}>
               <ul>
                  <li>
                     <NavLink exact activeClassName={classes.active} to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink activeClassName={classes.active} to="/about">About</NavLink>
                  </li>
                  <li>
                     <NavLink
                        activeClassName={classes.active}
                        to={{
                           pathname: '/cars/'
                        }}
                     >
                        Cars
                     </NavLink>
                  </li>
               </ul>
            </nav>

            <hr/>
            <div style={{textAlign: 'center'}}>
               <h3>Is Logged In {String(this.state.isLoggedIn).toUpperCase()}</h3>
               <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
            </div>
            <hr/>
            <Switch>
               <Route path="/" exact render={() => <h1>HomePage</h1>}/>
               {this.state.isLoggedIn && <Route path="/about" exact component={About}/>}
               <Route path="/cars/:name" component={CarDetail}/>
               <Route path="/cars" component={Cars}/>
               <Redirect to={'/'}/>
               {/*<Route render={() => {
               return (
                  <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>
               )
            }}/>*/}
            </Switch>
         </div>
      );
   }
}

export default App;
