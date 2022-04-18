import React from "react";
import { selectAuthorization } from "reducers/authSlice";
import { useSelector } from "react-redux";

import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { logohoangtoeic } from "../../../assets/brand/logohoangtoeic";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { selectNavbarStatus } from "reducers/navbarSlice";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  // const dispatch = useDispatch();
  const { isRole } = useSelector(selectAuthorization);
  const { show } = useSelector(selectNavbarStatus);

  const pickNavigate = (navigation) => {
    return navigation?.filter((nav) => nav.role === isRole);
  };

  return (
    <CSidebar position="fixed" visible={show}>
      <CSidebarBrand className="d-none d-md-flex logoBrandAdmin" to="/">
        <CIcon className="sidebar-brand-full" icon={logohoangtoeic} />
        <p>HOÀNG TOEIC</p>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar position="relative">
          <AppSidebarNav items={pickNavigate(navigation)} />
          {/* <AppSidebarNav items={navigation} /> */}
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch(isStatus());
        }}
      /> */}
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
