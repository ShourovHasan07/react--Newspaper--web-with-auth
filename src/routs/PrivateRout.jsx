import React, { useContext } from 'react';
import { Authcontext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
  const {user,loading} = useContext(Authcontext)
  const location = useLocation()
  console.log(location.pathname)

  if (loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

if (user ){
  return children
}

  return <Navigate state={location.pathname} to ="/login"></Navigate>
};

export default PrivateRout;