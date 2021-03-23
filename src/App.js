import React from 'react';
import { Route } from 'react-router-dom';
import HomeVeiw from './views/HomeView';
import AuthorsView from './views/AuthorsView';

const App = () => (
  <>
    <Route path="/" component={HomeVeiw} />
    <Route path="/authors" component={AuthorsView} />
  </>
);

export default App;
