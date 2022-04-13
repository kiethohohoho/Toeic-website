import Container from "components/Container";
import Logout from "features/Auth/Logout";
import React from "react";
import "./DashBoard.scss";

const DashBoard = ({ menuList, children }) => {
  return (
    <Container type="wide">
      <div className="dashBoardContainer">
        <div className="dashBoardTitle">
          <span>
            Xin chào <b>sdadsadas</b>
          </span>
          <Logout />
        </div>
        <div className="dashBoard">
          <div className="dashBoard_menu">dsada</div>
          <div className="dashBoard_content">{children}</div>
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
