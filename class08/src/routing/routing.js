import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages for navigation
import About from "../pages/about";
import Company from "../pages/company";
import Contact from "../pages/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../pages/home";
import NavBar from "../components/navbar";
import BasicTable from "../pages/table";
import Students, { StudentsFunction } from "../components/classVsfunctional";



function Routing() {
    return(
      <Router>
          
          <Header />

          <NavBar />
        
          <Switch>
              <Route exact path="/">
              <Students />
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

              <Route path="/table">
               <BasicTable />
              </Route>

          </Switch>

          <Footer />
          
      </Router>
    )
}

export default Routing;

// auth
// private routing
// nested routing
// dyanmic routing