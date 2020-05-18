import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Works from './pages/works';
import Categories from './pages/works/categories';
import Examples from './pages/examples';

const Router = () => {
  return <Switch>
    <Route
      path="/"
      component={Home}
      exact
    />
    <Route
      path="/hakkımda"
      component={AboutMe}
    />
    <Route
      path="/calismalarim"
      component={Works}
    />
    <Route
      path="/grafik"
      component={Categories}
    />
    <Route
      path="/yazilim"
      component={Categories}
    />
    <Route
      path="/muzik"
      component={Categories}
    />
    <Route
      path="/deneme"
      component={Examples}
    />

  </Switch>
}
export default Router;