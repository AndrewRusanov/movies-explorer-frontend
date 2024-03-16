import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ children }) => {
  const loggedIn = localStorage.getItem('loggedIn');
  return <>{loggedIn ? children : <Navigate to='/' replace />}</>;
};

export default ProtectedRouteElement;
