import LeftSideDM from "./Components/LeftSideDM"
import NavBar from "./Components/NavBar"
import RightSIdeDM from "./Components/RightSIdeDM"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationMain from "./Components/RegistrationComponents/RegistrationMain";
import ProtectedRoute from "./Components/RegistrationComponents/ProtectedRoute";
import { AuthProvider } from "./Components/RegistrationComponents/AuthContext";
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
      <div className="flex">
      <div className="pt-15 pl-5 h-screen w-[25%] border-r-1 border-neutral-200">
      <LeftSideDM/>
      </div>
      <div className="pt-10 h-screen w-[75%]">
      <RightSIdeDM/>
      </div>
      </div>
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
