import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import AllCourse from '../pages/AllCourse'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'




class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/course" component={AllCourse}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/portfolio" component={Portfolio}></Route>
                <Route exact path="/service" component={Service}></Route>
                <Route exact path="/privacy" component={Privacy}></Route>
                <Route exact path="/terms" component={Terms}></Route>
            </Switch>

                
            </Fragment>
        );
    }
}

export default AppRoute;