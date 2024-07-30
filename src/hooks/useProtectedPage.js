import { useNavigate } from 'react-router-dom';
import { GoToLogin } from './../router/Coordinator';
import { useEffect } from 'react';
export const useProtectedPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        GoToLogin(navigate)
      }
    }, [navigate]);
  
  };