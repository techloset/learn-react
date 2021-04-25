import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/about";
import Company from "./components/company";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";


function App() {
  return (
    <>

    <Router>
    <Header/>
    <Link to="/">Home </Link>
    <Link to="/about">About </Link>
    <Link to="/company">company </Link>
    <Link to="/contact">contact </Link>
    <Link to="/company/portfolio"> company portfolio </Link>

   
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      </Switch>

     <Footer/>
    </Router>
    </>
  );
}

export default App;
