import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Link from "next/link";
import ListDivider from "@mui/joy/ListDivider";
import Input from "@mui/joy/Input";
import { CssVarsProvider } from "@mui/joy/styles";
import Styles from "./Auth.module.css";
import TamboluLogo from "/components/Logo/Tambolu";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../../public/store/ProductState";
import MessageDialog from "../Dialog/MessageDialog";
import Checkbox from "@mui/joy/Checkbox";

export default function Register() {
  const [radius, setRadius] = React.useState(16);
  const [childHeight, setChildHeight] = React.useState(32);
  const [isVisible, setVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isSaveAccount, setSaveAccount] = React.useState(false);
  const [isLogin, setLoginState] = React.useState(null);

  const RegisterForm = React.useRef();

  const [logoSize, setLogoSize] = React.useState({
    width: 300,
    height: 300,
  });

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    for(let i = 0; i < 5; i++) {
      console.log(RegisterForm.current.childNodes[i].childNodes[1]?.querySelector('input').value);
    }
    
    // console.log(); 
  }, []);

  const renderInput = () => {
    for(let i = 0; i < 5; i++) {
      console.log(RegisterForm.current.childNodes[i].childNodes[1]?.querySelector('input').value);
    }
  };

  // const getValues = () => {
  //   loginUser(usernameField.current.childNodes[0].value)
  //     .then((res) => {
  //       setLoginState(
  //         res.password === passwordField.current.childNodes[0].value
  //       );
  //       if (isSaveAccount)
  //         window.localStorage.setItem(
  //           "saved-account",
  //           usernameField.current.childNodes[0].value
  //         );
  //       else window.localStorage.setItem("saved-account", "");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setOpen(true);
  // };

  return (
    <>
      <CssVarsProvider>
        <div className="sm:h-screen sm:p-0 py-6 flex items-center">
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            className="bg-blue-300 p-3 border border-blue-700 border-dashed border-4"
          >
            <Box 
              sx={{ alignItems: 'center'}}
              className="sm:flex"
            >
              <div className="text-center">
                <TamboluLogo width={logoSize.width} height={logoSize.height} />
              </div>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}
                ref={RegisterForm}
              >
                <strong className={`text-xl ${Styles["title-font"]} mx-auto`}>
                  ĐĂNG KÝ
                </strong>

                {/* Email register */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  className="bg-blue-300"
                >
                  <small
                    className={`username-label ${Styles["Montserrat-font"]}`}
                  >
                    Email
                  </small>
                  <Input
                    size="md"
                    placeholder="example@gmail.com"
                    type="email"
                    sx={{
                      "--Input-radius": `${radius}px`,
                      "--Input-decorator-childHeight": `${childHeight}px`,
                    }}
                  />
                </Box>

                {/* Username field */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  className="bg-blue-300"
                >
                  <small
                    className={`username-label ${Styles["Montserrat-font"]}`}
                  >
                    Tên đăng nhập
                  </small>
                  <Input
                    size="md"
                    placeholder="Nguyenvana1998"
                    sx={{
                      "--Input-radius": `${radius}px`,
                      "--Input-decorator-childHeight": `${childHeight}px`,
                    }}
                  />
                </Box>

                {/* Phone number */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  className="bg-blue-300"
                >
                  <small
                    className={`username-label ${Styles["Montserrat-font"]}`}
                  >
                    Số điện thoại
                  </small>
                  <Input
                    size="md"
                    type="tel"
                    placeholder="0123456789"
                    sx={{
                      "--Input-radius": `${radius}px`,
                      "--Input-decorator-childHeight": `${childHeight}px`,
                    }}
                  />
                </Box>

                {/* Password and Confirm password */}
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  className="bg-blue-300"
                >
                  <small
                    className={`password-label ${Styles["Montserrat-font"]}`}
                  >
                    Mật khẩu
                  </small>

                  <Input
                    size="md"
                    placeholder=""
                    type={isVisible ? "text" : "password"}
                    endDecorator={
                      <Button
                        variant="soft"
                        size="sm"
                        className="bg-blur-green hover:bg-blur-blue"
                        onClick={() => setVisible((prev) => !prev)}
                      >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    }
                    sx={{
                      "--Input-radius": `${radius}px`,
                      "--Input-decorator-childHeight": `${childHeight}px`,
                    }}
                  />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  className="bg-blue-300"
                >
                  <small
                    className={`password-label ${Styles["Montserrat-font"]}`}
                  >
                    Xác Nhận Mật khẩu
                  </small>

                  <Input
                    size="md"
                    placeholder=""
                    type={isVisible ? "text" : "password"}
                    // endDecorator={
                    //   <Button
                    //     variant="soft"
                    //     size="sm"
                    //     className="bg-blur-green hover:bg-blur-blue"
                    //     onClick={() => setVisible((prev) => !prev)}
                    //   >
                    //     {isVisible ? <FaEyeSlash /> : <FaEye />}
                    //   </Button>
                    // }
                    sx={{
                      "--Input-radius": `${radius}px`,
                      "--Input-decorator-childHeight": `${childHeight}px`,
                    }}
                  />
                </Box>

                {/* End */}
              </Box>
            </Box>

            <ListDivider component="hr" />

            <Checkbox
              color="primary"
              label="Ghi nhớ cho lần đăng nhập sau"
              onClick={() => setSaveAccount((prev) => !prev)}
            />

            <Button
              variant="outlined"
              onClick={() => {
                renderInput();
              }}
            >
              Đăng Ký
            </Button>
            <small
              className={`username-label text-right ${Styles["Montserrat-font"]}`}
            >
              Đã có tài khoản?
              <Link href="/login">
                <button className="text-blue-600">Đăng nhập</button>
              </Link>
            </small>
          </Box>
        </div>
      </CssVarsProvider>

      <MessageDialog open={open} handleClose={handleClose} isLogin={isLogin} />
    </>
  );
}
