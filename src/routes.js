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
        <Route path='/' component={Header} />
        <Route path='/' component={Section} />
        <Route path='/' component={FoodMenu} />
        <Route path='/' component={Signup} />
    </div>
)


export default routes