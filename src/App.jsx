import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Page from "./pages/Page";
import Home from "./pages/home/Home";
import Appointments from "./pages/appointments/Appointments";
import SignUp from "./pages/AuthPages/SignUp";
import Login from "./pages/AuthPages/Login";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Login />} />
          <Route path="Dashboard" element={<Home />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}
