import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"
import DirectMessages from "../DirectMessages/DirectMessages";
import RegistrationMain from "./RegistrationMain"

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}

export default function UserRoutes() {
  return (
    <Router basename="/pigeon">
      <Routes>
        <Route path="/" element={< RegistrationMain/> } />
        <Route path="/messages" element={<PrivateRoute><DirectMessages /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
