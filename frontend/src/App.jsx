import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import PrivateRoute from './routes/PrivateRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserDashboard from './pages/User/UserDashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="dashboard" element={<AdminDashboard />} />

        </Route>
        {/* User Routes */}
        <Route path="/user" element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="dashboard" element={<UserDashboard />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App