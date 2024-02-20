import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { useAuthContext } from "./context/AuthContext";
 

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={authUser? <Navigate to='/'/> : <SignUp/>  } />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
