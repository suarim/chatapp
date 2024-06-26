import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx"; // Ensure this path is correct
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      
        <Routes>
          <Route path="/" element={authUser ? <Home/>: <Navigate to={'/login'} />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
        <Toaster />
      
    </div>
  );
}

export default App;
