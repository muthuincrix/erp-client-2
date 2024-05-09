"use client";
import { Stack, IconButton, Breadcrumbs, Typography } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import { useRouter } from "next/navigation";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function TopNavBar() {
  const router = useRouter();

  
  const breadcrumbs = [
    <Typography color={"black"}>Dashboard</Typography>,
    <Typography color={"black"}>Dashboard</Typography>,
  ];
  return (
    <Stack
      margin={"20px"}
      p={2}
      width={"100%"}
      // sx={{ backgroundColor: "red" }}
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
        <Stack>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" style={{ color: "#888888" }} />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Stack>
    </Stack>
  );
}
