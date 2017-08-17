//react
import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header'
import Section from './components/section'
import FoodMenu from './components/foodMenu'
import Signup from './components/signup'

const routes = (
    <div>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Section} />
        <Route exact path='/' component={FoodMenu} />
        <Route path='/signup' component={Signup} />

    </div>
)


export default routes