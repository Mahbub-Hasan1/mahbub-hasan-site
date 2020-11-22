import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
