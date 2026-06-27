import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={
        <PublicRoute>
          <AdminLogin />
      </PublicRoute>
        } />
      <Route
        path="/admin"
        element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                }
      />
    </Routes>
  );
}

export default App;