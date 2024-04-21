import { useEffect } from 'react';
import supabase from '../../supabase/Client';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = (redirectUrl) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = (event, session) => {
      const currentPath = window.location.pathname;
      const editorIdMatch = currentPath.match(/\/editor\/(\d+)/);
      const projectsEditorIdMatch = currentPath.match(/\/projects-editor\/(\d+)/);

      if (!session) {
        navigate('/login');
      } else if (editorIdMatch) {
        navigate(`/editor/${editorIdMatch[1]}`); // Corregido aquí
      } else if (projectsEditorIdMatch) {
        navigate(`/projects-editor/${projectsEditorIdMatch[1]}`); // Agregado aquí para manejar el editor de proyectos
      } else {
        navigate(redirectUrl);
      }
    };

    supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      // Eliminé el cuerpo de esta función porque actualmente no se está utilizando
    };
  }, [navigate, redirectUrl]);
};

export default useAuthRedirect;
