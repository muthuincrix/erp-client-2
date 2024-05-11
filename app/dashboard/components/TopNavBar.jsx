"use client";
import {
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import BreadcrumbsMap from "./BreadcrumbsMap";
import MasterAddButton from "./MasterAddButton";
import NotificationButton from "./NotificationButton";

export default function TopNavBar() {
  const router = useRouter();

  
  const breadcrumbs = [
    <Typography color={"black"}>Dashboard</Typography>,
    <Typography color={"black"}>Dashboard</Typography>,
  ];
  return (
    <Stack
      margin={"20px 0 0 0"}
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Stack direction={"row"} gap={1}>
          <IconButton onClick={() => router.back()}>
            <KeyboardBackspaceRoundedIcon style={{ color: "#888888" }} />
          </IconButton>
          <IconButton onClick={() => router.forward()}>
            <KeyboardBackspaceRoundedIcon
              style={{ color: "#888888" }}
              sx={{
                transform: "rotate(180deg)",
              }}
            />
          </IconButton>
        </Stack>
        <BreadcrumbsMap />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        <MasterAddButton />
        <NotificationButton />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"16px"} fontWeight={"500"}>
            Incrix Techlutions LLP
          </Typography>
          <KeyboardArrowDownRoundedIcon
            sx={{
              // color: "white",
              // transform: open ? "rotate(180deg)" : "rotate(00deg)",
              marginLeft: "auto",
              fontSize: "26px",
              // transition: "all 0.25s ease-out",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

