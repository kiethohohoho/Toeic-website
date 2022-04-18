import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogout } from "reducers/authSlice";

const Logout = ({ customStyle }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(isLogout());
    localStorage.clear();
    navigate("/login");
  };
  return (
    <button
      style={customStyle}
      className="btn danger"
      onClick={() => handleLogout()}
    >
      Đăng xuất
    </button>
  );
};

export default Logout;
