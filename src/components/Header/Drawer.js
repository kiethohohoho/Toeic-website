import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Drawer.scss";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const linkDrawers = [
    { path: "/", title: "Trang chủ" },
    { path: "/review", title: "Đánh giá" },
    { path: "/contact", title: "Liên hệ" },
    { path: "/login", title: "Đăng nhập" },
  ];

  const renderLinkDrawers = (links) => {
    return (
      links.length &&
      links.map((link, index) => (
        <>
          <ListItem key={index} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={link.path}>{link.title}</NavLink>
            </ListItemText>
          </ListItem>
          <Divider />
        </>
      ))
    );
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div style={{ width: window.innerWidth - 100 }}>
          <List className="menuLinks">{renderLinkDrawers(linkDrawers)}</List>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
