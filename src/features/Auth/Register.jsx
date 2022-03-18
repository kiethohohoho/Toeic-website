import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import accountApi from "apis/accountApi";
import { checkEmail } from "components/common";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendVerify = () => {
    if (!checkEmail(email)) {
      toast.warning("Hãy nhập đúng email", { position: "bottom-right" });
    } else {
      postEmailVerify(email);
    }
  };
  const postEmailVerify = async (email) => {
    const params = { email: email };
    try {
      await accountApi.postVerifyEmailRegister(params);
      toast.success("Gửi mã xác nhận thành công, hãy kiểm tra email", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log("lỗi rồi", { error });
      // toast.warning(`${error.response.data.message}`, {
      //   position: "bottom-right",
      // });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, verifyCode, password, fullName, birthday, gender, phone } =
      e.target;

    const info = {
      email: email.value,
      verifyCode: verifyCode.value.trim(),
      password: password.value,
      fullName: fullName.value,
      birthday: birthday.value,
      gender: gender.value,
      phone: phone.value,
    };
    postRegister(info);
  };

  const postRegister = async (params) => {
    try {
      await accountApi.postRegister(params);
      toast.success("Đăng ký tài khoản thành công", {
        position: "bottom-right",
      });
      navigate("/login");
    } catch (error) {
      console.log("lỗi rồi", { error });
      toast.warning(`${error.response.data.message}`, {
        position: "bottom-right",
      });
    }
  };
  return (
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
          Đăng ký tài khoản
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <Grid container spacing={2} width={{ lg: 800 }}>
            <Grid container item lg={6} sm={12} direction="column">
              {/* nhập địa chỉ email */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Nhập địa chỉ email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                // error
                // helperText="Hãy nhập email"
              />
              {/* mã xác nhận email */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="verifyCode"
                label="Mã xác nhận gmail"
                InputProps={{
                  endAdornment: (
                    <Button
                      endIcon={<SendIcon />}
                      variant="contained"
                      onClick={() => sendVerify()}
                      sx={{ width: 150 }}
                    >
                      Gửi mã
                    </Button>
                  ),
                }}
              />

              {/* nhập mật khẩu */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nhập mật khẩu"
                type="password"
              />
              {/* xác nhận mật khẩu */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordComfirm"
                label="Nhập lại mật khẩu"
                type="password"
              />
            </Grid>
            <Grid container item lg={6} sm={12} direction="column">
              <TextField
                margin="normal"
                required
                fullWidth
                label="Nhập họ và tên"
                name="fullName"
              />
              <TextField
                margin="normal"
                name="birthday"
                label="Ngày sinh nhật"
                InputLabelProps={{ shrink: true }}
                type="datetime-local"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel id="male-label">Giới tính</InputLabel>
                <Select
                  required
                  labelId="male-label"
                  name="gender"
                  label="Giới tính"
                  defaultValue={true}
                >
                  <MenuItem value="true">Nam</MenuItem>
                  <MenuItem value="false">Nữ</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                fullWidth
                name="phone"
                label="Số điện thoại"
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            direction="column"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ marginBottom: "10px", width: "400px" }}
            >
              Đăng ký tài khoản
            </Button>
            <Link to="/login">Trở lại đăng nhập</Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
