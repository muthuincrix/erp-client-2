"use client"
import OtpInput from "react-otp-input";
import { SmoothCorners } from "react-smooth-corners";
import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";

export default function OtpForm() {
  const [otp, setOtp] = useState("");
  return (
    <Stack gap={2}>
      <SmoothCorners style={{ display: "none" }} />
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderInput={(props) => <input class="otp" {...props} />}
        containerStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        inputStyle={{
          width: "70px",
          height: "70px",
          color: "#000E33",
          fontSize: "18px",
          fontWeight: "600",
          borderRadius: "10px",
          border: "2px solid #82878C",
          textAlign: "center",
          "--smooth-corners": "8",
          maskImage: "paint(smooth - corners)",
          "-webkit-mask-image": "paint(smooth-corners)",
        }}
      />
      <CustomeButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#0080FF"}
        height={"50px"}
        // width={"300px"}
      >
        Continue to verify
      </CustomeButton>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            textDecoration: "underline",
            color: "#000E33",
            fontSize: "12px",
            fontWeight: "600",
            "&:hover": {
              textDecoration: "underline",
              background: "none",
            },
          }}
        >
          Resend OTP in 60 sec
        </Button>
      </Stack>
    </Stack>
  );
}
