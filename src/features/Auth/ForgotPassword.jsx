import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { checkEmail } from "components/common";
import LayoutMainPage from "components/LayoutMainPage";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const sendVerify = () => {
    if (!checkEmail(email)) {
      toast.warning("Hãy nhập đúng email", { position: "bottom-right" });
    } else {
      toast.success("Gửi mã xác nhận thành công, hãy kiểm tra email", {
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
            Lấy lại mật khẩu
          </Typography>
          <Box component="form">
            <Grid container sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Nhập địa chỉ email"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="verify"
                label="Mã xác nhận gmail"
                id="verify"
                InputProps={{
                  endAdornment: (
                    <Button
                      endIcon={<SendIcon />}
                      variant="contained"
                      sx={{ width: 150 }}
                      onClick={() => sendVerify()}
                    >
                      Gửi mã
                    </Button>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nhập mật khẩu mới"
                type="password"
                id="password"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginBottom: "10px" }}
              >
                Lấy lại mật khẩu
              </Button>
              <Link to="/login">Trở lại đăng nhập</Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </LayoutMainPage>
  );
}

export default ForgotPassword;
