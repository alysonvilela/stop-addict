import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import MapPage from "./pages/Map";
import HomePage from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <MapPage />
          </ProtectedRoute>
        }
      />
    </>
  )
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
