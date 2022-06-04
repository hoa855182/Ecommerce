import Dashboard from "../components/Admin/Dashboard";
import Profile from "../components/Admin/Profile";

export const router = [
    {path: "/admin", exact: true, name: 'Admin' },
    {path: "/admin/dashboard", exact: true, element : <Dashboard/> },
    {path: "/admin/profile", exact: true , element : <Profile/> }

]

