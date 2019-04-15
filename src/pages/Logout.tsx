import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface IProps {}

const Logout: React.FC<IProps> = () => {
  useEffect(() => {
    const logout = async () => {
      // Logic to logout
    };
    logout();
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
