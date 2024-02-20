import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
 

function App() {
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
