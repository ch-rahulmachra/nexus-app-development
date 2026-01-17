import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Expenses from "../pages/Expenses";
import Approvals from "../pages/Approvals";
import Notifications from "../pages/Notifications";
import AuditLogs from "../pages/AuditLogs";
import Reports from "../pages/Reports";
import Admin from "../pages/Admin";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/audit" element={<AuditLogs />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
