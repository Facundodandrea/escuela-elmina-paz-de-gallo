import { SidebarAdmin } from "../../layout/admins/componets/sidebarAdmin/SidebarAdmin";
import { MenuAdmin } from '../../layout/admins/componets/menuAdmin/MenuAdmin';
import './adminLayout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout-admin">
            <SidebarAdmin />
        <div className="main-content">
            <MenuAdmin className="menu-admin" />
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  );
};

export default Layout;
