import React from 'react';
import { Route, Switch } from 'react-router-dom';

interface IProps {}

const Routes: React.FC<IProps> = () => {
  return (
    <Switch>
      <Route path="/" exact />
    </Switch>
  );
};

export default Routes;
