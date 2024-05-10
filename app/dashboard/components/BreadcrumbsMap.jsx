import { Stack, Typography, Breadcrumbs } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Icons from "@/util/icons";

export default function BreadcrumbsMap() {
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
