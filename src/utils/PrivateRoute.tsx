import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { selectIsLoggedIn } from '../app/features/auth/login/loginSlice';

const PrivateRoute = () => {
  const userInfo = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!userInfo) {
      toast('Please Login', {
        icon: 'ℹ️',
      });
    }
  }, []);

  return userInfo ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};

export default PrivateRoute;
