import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;