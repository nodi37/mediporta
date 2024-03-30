import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRedirectHook = (path: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;
    navigate(path);
  }, [location]);
};
