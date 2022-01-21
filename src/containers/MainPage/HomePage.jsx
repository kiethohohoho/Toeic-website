import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="forgot_password">Forgot password</Link>
    </Container>
  );
}

export default HomePage;
