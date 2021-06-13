import React from 'react'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../commonComponents/header/Header";
import Footer from "../commonComponents/footer/Footer";
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import Home from '../modules/home/Home';
import Profile from "../modules/profile/Profile";
import LandingPage from '../modules/landingPage/LandingPage';
import PrivateRoute from "./PrivateRouting";
import PublicRoute from "./PublicRouting";



export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)


    return (
        <Router>
        <Header />
       
       
        <Switch>

         <Route exact path="/">
              <LandingPage />
          </Route>
          
          <PublicRoute path="/login" auth={authState}>
              <Login />
          </PublicRoute>        

          <PublicRoute path="/signup" auth={authState} >
              <Signup />
          </PublicRoute>

        {/* protected routes */}
    const authState = true;
          <PrivateRoute path="/home" auth={authState}>
              <Home />
          </PrivateRoute>

          <PrivateRoute path="/profile" auth={authState}>
              <Profile />
          </PrivateRoute>


        </Switch>
         
  
        <Footer />
        </Router>
    )
}
