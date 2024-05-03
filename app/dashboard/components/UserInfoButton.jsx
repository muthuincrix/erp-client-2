"use client";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomeStack from "@/app/components/CustomeStack";
import Avatar from "@/util/avatar";
import NavButton from "./NavButton";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default function UserInfoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    document.addEventListener("click", () => {
      setIsOpen(false);
      console.log("remove");
      document.removeEventListener("click", () => {
      });
    });
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     document.addEventListener("click", () => {
  //       setIsOpen(false);
  //     });
  //   } else {
  //     document.removeEventListener("click", () => {});
  //   }
  // }, [isOpen, setIsOpen]);

  return (
    <Stack position="relative">
      <CustomeStack
        background={"rgba(130,135,140,30%)"}
        smoothCorners={"12"}
        direction="row"
        width="100%"
        height={"60px"}
        borderRadius={"10px"}
        alignItems={"center"}
        padding={"0 15px"}
        gap={1}
        onBlur={handleClick}
        onClick={handleClick}
        hover={{
          background: "rgba(130,135,140,50%)",
          transition: "all 0.25s ease-out",
        }}
        sx={{
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        }}
        cursor="pointer"
      >
        <Avatar
          character="m1"
          sx={{
            width: "44px",
            borderRadius: "50%",
            border: "1px solid #0080FF",
          }}
        ></Avatar>
        <Typography variant="h6" fontSize={"16px"} color={"white"}>
          Avinash Sethu
        </Typography>
      </CustomeStack>
      <CustomeStack
        smoothCorners={"12"}
        gap={0.5}
        alignItems={"center"}
        sx={{
          position: "absolute",
          background: "white",
          top: "0",
          left: "0",
          padding: "10px",
          borderRadius: "10px",
          transition: "all 0.25s ease-out",
          width: "100%",
          height: "auto",
          opacity: isOpen ? "1" : "0",
          visiblity: isOpen ? "block" : "0",
          transform: "translate(0, -105%)",
          zIndex: isOpen ? "100" : "-1",
        }}
      >
        <NavButton
          isLight={true}
          icon={
            <SettingsRoundedIcon
              sx={{
                color: "#82878C",
              }}
            />
          }
          title={"Settings"}
        />
        <hr
          style={{
            width: "90%",
            height: "1px",
            backgroundColor: "#A8ABAF",
            border: "none",
          }}
        />
        <NavButton
          isLight={true}
          icon={
            <LogoutRoundedIcon
              sx={{
                color: "#82878C",
              }}
            />
          }
          title={"Logout"}
        />
        {/* <Stack
          width={"1000px"}
          height={"1000px"}
          background={"red"}
          position={"absolute"}
          onClick={handleClick}
          zIndex={"-1"}
        ></Stack> */}
      </CustomeStack>
    </Stack>
  );
}
