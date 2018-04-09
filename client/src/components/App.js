import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Beers from './Beers';
import Breweries from './Breweries';
import BeerView from './BeerView';
import BreweryView from './BreweryView';

class App extends Component {
  render() {
    return (
      <Segment>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/beerview' component={BeerView} />
          <Route exact path='/breweryview' component={BreweryView} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}



export default App;
