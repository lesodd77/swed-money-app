import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.min.css";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Hero from "./pages/Hero";
import Analyse from "./pages/Analyse";
import Student from "./pages/student/Student";
import ReEnroll from "./pages/student/ReEnroll";





function App() {
  return (
    <div className="student_form">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />} 
              />
             
        
            <Route
              path="/student"
              element={<ProtectedRoute>
                <Student/>
              </ProtectedRoute>} />
              <Route
              path="/reEnroll"
              element={<ProtectedRoute>
                <ReEnroll />
              </ProtectedRoute>} />
              <Route
              path="/hero"
              element={<ProtectedRoute>
                <Hero />
              </ProtectedRoute>} />
                
              <Route
              path="/wallet"
              element={<ProtectedRoute>
                <Wallet />
              </ProtectedRoute>} />
           
              <Route
              path="/analyse"
              element={<ProtectedRoute>
                <Analyse />
              </ProtectedRoute>} />
            <Route
              path="/admin"
              element={<ProtectedRoute>
                <Admin />
              </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
     
  );
}

export function ProtectedRoute(props) {
  if (localStorage.getItem("swed-money")) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}


export default App;
