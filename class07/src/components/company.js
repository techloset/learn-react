import {Route, Link, Switch} from "react-router-dom";
import Portfolio from "./company/portfolio";
import SocialLinks from "./company/sociallinks";


function Company() {
    return (
        <div>
        <Switch>
            <Route path="/company/">
            </Route>
            <Route path="/company/portfolio">
            <Portfolio />
            </Route>
            <Route path="/company/socialLinks">
             <SocialLinks />
            </Route>
        </Switch>
        </div>
    )
}

export default Company;