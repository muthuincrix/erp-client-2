import { Stack } from "@mui/material";
import SignInForm from "./SigninForm";
import SignUpForm from "./SignupForm";
import incrixLogo from "@/public/images/incrix-logo.png";
import Link from "next/link";
import OtpForm from "./OtpForm";

export default function VerifyForm() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
    >
      <Stack gap={4} maxWidth={"450px"}>
        <Stack gap={1}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Enter the code
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#82878C",
            }}
          >
            Enter the OTP code that we sent to your email a******l@gmail.com and
            be careful not to share the code with anyone
          </p>
        </Stack>
        <OtpForm />
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
