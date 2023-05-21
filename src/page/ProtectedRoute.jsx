import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (user === undefined) {
    // TODO: 깜빡이는 문제 14.12
    return <></>;
  } else if (user === null || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace={true} />;
  }
  return children;
}
