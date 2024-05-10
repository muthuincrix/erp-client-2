import { Stack } from "@mui/material";
import SignInForm from "./SigninForm";
import SignUpForm from "./SignupForm";
import incrixLogo from "@/public/images/incrix-logo.png";
import Link from "next/link";

export default function Form({setVerify}) {

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
    >
      <Stack gap={4} maxWidth={"450px"}>
        <img
          src={incrixLogo.src}
          style={{
            width: "200px",
          }}
          alt="Incrix"
        />
        <Stack gap={1}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Sign in or create an account
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#82878C",
            }}
          >
            Welcome <font color="#0080FF">back!</font> Please enter your
            details.
          </p>
        </Stack>
        <SignInForm setVerify={setVerify} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
        >
          <hr
            style={{
              width: "100%",
            }}
          />
          <span style={{ fontSize: "12px", color: "#212328" }}>or</span>{" "}
          <hr
            style={{
              width: "100%",
            }}
          />
        </Stack>
        <SignUpForm setVerify={setVerify} />
        <p
          style={{
            fontSize: "12px",
            color: "#82878C",
          }}
        >
          By signing in or creating an account, you agree with our{" "}
          <Link
            style={{ fontWeight: "600", textDecoration: "underline" }}
            href={"/"}
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            style={{ fontWeight: "600", textDecoration: "underline" }}
            href={"/"}
          >
            Privacy Statement
          </Link>
        </p>
      </Stack>
    </Stack>
  );
}
