import NavBar from "./Components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationMain from "./Components/RegistrationComponents/RegistrationMain";
import ProtectedRoute from "./Components/RegistrationComponents/ProtectedRoute";
import { AuthProvider } from "./Components/RegistrationComponents/AuthContext";
import DirectMessages from "./Components/DirectMessages/DirectMessages";
function App() {
  return (
    <>
       <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationMain />} />
          <Route
            path="/Messages"
            element={
              <ProtectedRoute>
                <NavBar/>
                <DirectMessages/>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<RegistrationMain />} /> {/* Перенаправление */}
        </Routes>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
