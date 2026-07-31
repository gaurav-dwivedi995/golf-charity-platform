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
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

import Tournament from "./components/Tournament";

function App() {

    return (

        <Routes>

            <Route element={<MainLayout />}>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/scores"
                    element={<Scores />}
                />

                <Route
                    path="/subscription"
                    element={<Subscription />}
                />

                <Route
                    path="/tournament"
                    element={<Tournament />}
                />

                <Route
                    path="/charity"
                    element={<Charity />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/admin-dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/leaderboard/:id"
                    element={<Leaderboard />}
                />

            </Route>

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/signup"
                element={<Signup />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />

            <Route
                path="/profile/edit"
                element={<EditProfile />}
            />

            <Route
                path="/change-password"
                element={<ChangePassword />}
            />

        </Routes>

    );

}

export default App;