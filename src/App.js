import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import { Navbar } from './components/Navbar';

import { About } from './components/About'
import { Home } from './components/Home'
import { User } from './components/User';

function App() {
  return (
    <div className="App">
      <>


        <Router>

          <Navbar />

          <Switch>


            <Route exact path="/">
              <Home />
            </Route>



            <Route exact path="/about">
              <About />
            </Route>


            <Route exact path="/user">
              <User />
            </Route>







          </Switch>




        </Router>




      </>



    </div>

  );

}

export default App;
