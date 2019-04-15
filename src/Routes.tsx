import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Index from './pages/Index';

interface IProps {}

const Routes: React.FC<IProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/auth" exact component={Auth} />
    </Switch>
  );
};

export default Routes;
