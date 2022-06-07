import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveTodos from "./pages/ActiveTodos";
import CompeletedTodos from "./pages/CompletedTodos";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UsersPage from "./pages/UsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/active"
            element={
              <ProtectedRoute>
                <ActiveTodos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/completed"
            element={
              <ProtectedRoute>
                <CompeletedTodos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          {/* Default Page Active Todos */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ActiveTodos />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
