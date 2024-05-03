import dashIcon from "@/public/icons/dash-icon.svg";
import productIcon from "@/public/icons/product-icon.svg";
import invoiceIcon from "@/public/icons/invoice-icon.svg";
import customerIcon from "@/public/icons/customer-icon.svg";
import vendorIcon from "@/public/icons/vendor-icon.svg";
import purchaseIcon from "@/public/icons/purchase-icon.svg";
import paymentIcon from "@/public/icons/payment-icon.svg";
import reportIcon from "@/public/icons/report-icon.svg";
import ecomIcon from "@/public/icons/ecom-icon.svg";

export function DashIcon(props) {
  return <img {...props} src={dashIcon.src} style={{
    width: props.width || "20px",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
  }} alt="dash-icon" />;
}

export function ProductIcon(props) {
  return <img {...props} src={productIcon.src} alt="product-icon" />;
}

export function InvoiceIcon(props) {
  return <img {...props} src={invoiceIcon.src}  alt="invoice-icon" />;
}

export function CustomerIcon(props) {
  return <img {...props} src={customerIcon.src} alt="customer-icon" />;
}

export function VendorIcon(props) {
  return <img {...props} src={vendorIcon.src} alt="vendor-icon" />;
}

export function PurchaseIcon(props) {
  return <img {...props} src={purchaseIcon.src} alt="purchase-icon" />;
}

export function PaymentIcon(props) {
  return <img {...props} src={paymentIcon.src} alt="payment-icon" />;
}

export function ReportIcon(props) {
  return <img {...props} src={reportIcon.src} alt="report-icon" />;
}

export function EcomIcon(props) {
  return <img {...props} src={ecomIcon.src} alt="ecom-icon" />;
}
