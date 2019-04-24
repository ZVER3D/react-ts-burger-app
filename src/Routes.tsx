import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import EditProfile from './pages/EditProfile';
import Index from './pages/Index';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import Orders from './pages/Orders';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/edit-profile" exact component={EditProfile} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
