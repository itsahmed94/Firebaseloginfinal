import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import objectives from './Components/objectives'
import experiance&education from './Components/objectives'
import LoginForm from "./components/LoginForm";

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "objectives" />
         <Scene key = "about" component = {About} title = "experiation&education" />      </Scene>
   </Router>
   const RouterComponent = () => {
      return (
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene
                key="login"
                component={LoginForm}
                title="Please Login"
                initial
              />
            </Scene>
)
export default Routes