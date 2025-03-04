import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import DirectMessages from "../DirectMessages/DirectMessages";
import RegistrationMain from "./RegistrationMain"

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}

function YourRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DirectMessages /> } />
        <Route path="/registration" element={<PrivateRoute><RegistrationMain /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
