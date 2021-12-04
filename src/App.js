import Home from './Home'
import SelectDraft from './SelectDraft'
import Import from './Import'
import Draft from './Draft'
import React from 'react'
import {  Route, Switch } from "react-router-dom"

function App() {
  return (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/select-draft" component={SelectDraft} />
        <Route path='/import' component={Import} />
        <Route path='/draft' component={Draft} />
        <Route component={Error} />
    </Switch>
  )
}

export default App;
