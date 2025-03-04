import DirectMessages from "./Components/DirectMessages/DirectMessages";
import RegistrationMain from "./Components/RegistrationComponents/RegistrationMain"
import NavBar from "./Components/NavBar"
import { AuthProvider }  from './Components/RegistrationComponents/AuthContext'
import UserRoutes  from './Components/RegistrationComponents/UserRoutes'
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  const CLIENT_ID = "700637116885-9pv5fjvn8ocq9fv3fuei6lhoi4t2v1c9.apps.googleusercontent.com";

  return (
    <>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <AuthProvider>
     <UserRoutes />
     </AuthProvider>
     </GoogleOAuthProvider>
    </>
  )
}

export default App
