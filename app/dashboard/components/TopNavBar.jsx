"use client";
import { Stack, IconButton, Breadcrumbs, Typography } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import { useRouter, usePathname } from "next/navigation";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Icons from "@/util/icons";

export default function TopNavBar() {
  const router = useRouter();
  return (
    <Stack
      margin={"20px 0 0 0"}
      width={"100%"}
      // sx={{
      //   backgroundColor: "#000E33",
      // }}
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
        <CustomeButton
          startIcon={<AddSharpIcon />}
          smoothCorners={8}
          backgroundColor={"#0080FF"}
        >
          Add
        </CustomeButton>
        <IconButton
          sx={{
            backgroundColor: "#0080FF",
            "&:hover": {
              backgroundColor: "#0080FF",
            },
          }}
        >
          <NotificationsSharpIcon style={{ color: "white" }} />
        </IconButton>
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

function BreadcrumbsMap() {
  const pathname = usePathname();
  const pathList = pathname.split("/").slice(1);
  const breadcrumbs = pathList.map((item, index) => {
    if (pathList.length > 1 && index == 0) return;
    if (item.search("&") !== -1)
      return (
        <Typography color={"#888888"} fontSize={"14px"}>
          {`${
            item.split("&")[0].charAt(0).toUpperCase() +
            item.split("&")[0].slice(1)
          } & ${
            item.split("&")[1].charAt(0).toUpperCase() +
            item.split("&")[1].slice(1)
          }`}
        </Typography>
      );
    return (
      <Typography color={"#888888"} fontSize={"14px"}>
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Typography>
    );
  });
  function ConditionalIcon() {
    return pathList.length == 1 ? (
      <Icons.DashIcon />
    ) : pathList[1] == "products&services" ? (
      <Icons.ProductIcon />
    ) : pathList[1] == "invoice" ? (
      <Icons.InvoiceIcon />
    ) : pathList[1] == "customers" ? (
      <Icons.CustomerIcon />
    ) : pathList[1] == "vendors" ? (
      <Icons.VendorIcon />
    ) : pathList[1] == "purchases&expenses" ? (
      <Icons.PurchaseIcon />
    ) : pathList[1] == "payments" ? (
      <Icons.PaymentIcon />
    ) : pathList[1] == "reports" ? (
      <Icons.ReportIcon />
    ) : null;
  }
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <ConditionalIcon />
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" style={{ color: "#888888" }} />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
