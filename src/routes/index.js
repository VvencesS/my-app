import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard.js";
import Following from "../pages/Folowing";
import Story from "../pages/Story";

const publicRoutes = [{ path: "/login", component: Login, layout: null }];
const privateRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/following", component: Following },
    { path: "/story", component: Story },
];

export { publicRoutes, privateRoutes };
