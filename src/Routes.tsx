import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Index from './pages/Index';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

interface IProps {}

const Routes: React.FC<IProps> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
