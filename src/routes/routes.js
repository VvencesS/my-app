import Dashboard from "../views/Dashboard";
import Notifications from "../views/Notifications";
import Icons from "../views/Icons";
import Typography from "../views/Typography";
import TableList from "../views/TableList";
import UserPage from "../views/UserPage";
import CreateCategory from "../views/category/Create";
import UpdateCategory from "../views/category/Update";
import ModalTypeInfo from "../views/ModalTypeInfo/List";
import CreateModalTypeInfo from "../views/ModalTypeInfo/Create";
import UpdateModalTypeInfo from "../views/ModalTypeInfo/Update";

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
    component: CreateCategory,
    layout: "/admin",
    show: false,
  },
  {
    path: "/category/update",
    name: "Update category",
    icon: "ui-1_simple-add",
    component: UpdateCategory,
    layout: "/admin",
    show: false,
  },
  {
    path: "/modal-type-info",
    name: "Modal type info",
    icon: "files_paper",
    component: ModalTypeInfo,
    layout: "/admin",
    show: true,
  },
  {
    path: "/modal-type-info/create",
    name: "Create Modal type info",
    icon: "ui-1_simple-add",
    component: CreateModalTypeInfo,
    layout: "/admin",
    show: false,
  },
  {
    path: "/modal-type-info/update",
    name: "Update Modal type info",
    icon: "ui-1_simple-add",
    component: UpdateModalTypeInfo,
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
