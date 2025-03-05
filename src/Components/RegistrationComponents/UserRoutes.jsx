import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"
import DirectMessages from "../DirectMessages/DirectMessages";
import RegistrationMain from "./RegistrationMain"
import Threads from "../Threads/Threads";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="registration" />;
 


}

export default function UserRoutes() {
  return (
    <Router basename="pigeon">
      <Routes>
        <Route path="/registration" element={< RegistrationMain/> } />
        <Route path="/" element={<PrivateRoute><DirectMessages /></PrivateRoute>} />
        <Route path="/threads" element={<Threads />} />
      </Routes>
    </Router>
  );
}
