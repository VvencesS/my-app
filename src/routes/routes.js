import Dashboard from "../views/Dashboard";
import Notifications from "../views/Notifications";
import Icons from "../views/Icons";
import Typography from "../views/Typography";
import TableList from "../views/TableList";
import UserPage from "../views/UserPage";
import Create from "../views/category/Create";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
    show: true,
  },
  {
    path: "/category/create",
    name: "Create category",
    icon: "ui-1_simple-add",
    component: Create,
    layout: "/admin",
    show: false,
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
    show: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
    show: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
    show: true,
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
    show: true,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
    show: true,
  },
  
  
];
export default dashRoutes;
