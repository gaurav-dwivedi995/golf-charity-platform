import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import Login from "./pages/Login";
import Charity from "./pages/Charity";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/scores" element={<Scores />} />

        <Route path="/subscription" element={<Subscription />} />

        <Route path="/charity" element={<Charity />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;