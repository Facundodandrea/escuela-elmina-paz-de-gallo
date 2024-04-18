import { useEffect } from 'react';
import supabase from '../../supabase/Client';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = (redirectUrl) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = (event, session) => {
      const currentPath = window.location.pathname;
      const editorIdMatch = currentPath.match(/\/editor\/(\d+)/);

      if (!session) {
        navigate('/login');
      } else if (editorIdMatch) {
        navigate(editorIdMatch[0]);
      } else {
        navigate(redirectUrl);
      }
    };

    supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
    };
  }, [navigate, redirectUrl]);
};

export default useAuthRedirect;
