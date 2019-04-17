import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { Redirect } from 'react-router-dom';
import { LogoutMutation } from '../generated/graphql';
import { LOGOUT_MUTATION } from '../graphql/mutations/logout';
import { RootContext } from '../store/RootStore';

interface IProps {}

const Logout = observer<IProps>(() => {
  const logout = useMutation<LogoutMutation>(LOGOUT_MUTATION);
  const { user } = useContext(RootContext);

  useEffect(() => {
    const executeLogout = async () => {
      user.logoutUser();
      await logout();
    };
    executeLogout();
  }, []);

  return <Redirect to="/" />;
});

export default Logout;
