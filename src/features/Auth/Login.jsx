import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authApi from "apis/authApi";
import LayoutMainPage from "components/LayoutMainPage";

function Login() {
  //false --> keepLogin, true --> refresh token
  const [keepLogin, setKeepLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const info = {
      email: email.value,
      password: password.value,
      keepLogin: keepLogin,
    };
    postLogin(info);
  };

  const postLogin = async (params) => {
    try {
      const response = await authApi.postLogin(params);
      console.log(response);
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };
  return (
    <LayoutMainPage>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Nhập địa chỉ email"
                type="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nhập mật khẩu"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox onChange={() => setKeepLogin(!keepLogin)} />}
                label="Duy trì đăng nhập"
              />
              <Button type="submit" variant="contained" fullWidth>
                Đăng nhập
              </Button>
              <Grid
                container
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Link to="/register">Chưa có tài khoản, đăng ký?</Link>
                <Link to="/forgot_password">Quên mật khẩu?</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </LayoutMainPage>
  );
}

export default Login;
