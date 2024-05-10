import dashIcon from "@/public/icons/dash-icon.svg";
import productIcon from "@/public/icons/product-icon.svg";
import invoiceIcon from "@/public/icons/invoice-icon.svg";
import customerIcon from "@/public/icons/customer-icon.svg";
import vendorIcon from "@/public/icons/vendor-icon.svg";
import purchaseIcon from "@/public/icons/purchase-icon.svg";
import paymentIcon from "@/public/icons/payment-icon.svg";
import reportIcon from "@/public/icons/report-icon.svg";
import ecomIcon from "@/public/icons/ecom-icon.svg";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function DashIcon(props) {
  return <img {...props} src={dashIcon.src} alt="dash-icon" />;
}

function ProductIcon(props) {
  return <img {...props} src={productIcon.src} alt="product-icon" />;
}

function InvoiceIcon(props) {
  return <img {...props} src={invoiceIcon.src} alt="invoice-icon" />;
}

function CustomerIcon(props) {
  return <img {...props} src={customerIcon.src} alt="customer-icon" />;
}

function VendorIcon(props) {
  return <img {...props} src={vendorIcon.src} alt="vendor-icon" />;
}

function PurchaseIcon(props) {
  return <img {...props} src={purchaseIcon.src} alt="purchase-icon" />;
}

function PaymentIcon(props) {
  return <img {...props} src={paymentIcon.src} alt="payment-icon" />;
}

function ReportIcon(props) {
  return <img {...props} src={reportIcon.src} alt="report-icon" />;
}

function EcomIcon(props) {
  return <img {...props} src={ecomIcon.src} alt="ecom-icon" />;
}

function SettingsIcon(props) {
  return <SettingsRoundedIcon {...props} />;
}

function LogoutIcon(props) {
  return <LogoutRoundedIcon {...props} />;
}

const Icons = {
  DashIcon,
  ProductIcon,
  InvoiceIcon,
  CustomerIcon,
  VendorIcon,
  PurchaseIcon,
  PaymentIcon,
  ReportIcon,
  EcomIcon,
  SettingsIcon,
  LogoutIcon,
};

export default Icons;
