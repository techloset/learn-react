import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../commonComponents/navbar";
import Header from "../commonComponents/header";
import Footer from "../commonComponents/footer";
import Home from "../commonComponents/eventItem";
import Company from "../commonComponents/featureItem";
import Contact from "../commonComponents/blogPost";
import About from "../modules/about/artWork";

function Routing() {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />

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
          <Route path="/users/:id">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default Routing;
