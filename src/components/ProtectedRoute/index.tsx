import { Navigate } from "react-router-dom";
import { useUserStore } from "../../store/user-store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  to?: string;
}

export const ProtectedRoute = ({ to = "/", children }: ProtectedRouteProps) => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to={to} replace />;
  }

  return children;
};
