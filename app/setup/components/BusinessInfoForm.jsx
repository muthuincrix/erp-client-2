import CustomeTextField from "@/app/components/CustomeTextField";
import { Stack, Autocomplete, Checkbox, Popper } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function BusinessInfoForm() {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack gap={2}>
      <CustomeTextField
        fullWidth={true}
        smoothCorners={18}
        placeholder="Enter Organization name"
      />
      <Autocomplete
        disablePortal
        options={industries}
        // groupBy={(option) => option.category}
        sx={{ width: "100%" }}
        popupIcon={<KeyboardArrowDownRoundedIcon />}
        renderInput={(params) => (
          <CustomeTextField
            {...params}
            fullWidth={true}
            smoothCorners={18}
            placeholder="Which industry are you in?"
          />
        )}
      />
      <CustomeTextField
        fullWidth={true}
        smoothCorners={18}
        placeholder="Organization phone number"
      />
      <CustomeTextField
        fullWidth={true}
        smoothCorners={18}
        placeholder="Organization email address"
      />
      <Stack gap={1}>
        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            size="small"
            checked={checked}
            onChange={handleChange}
            sx={{
              color: "#82878C",
              "&.Mui-checked": {
                color: "#0080FF",
              },
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#82878C",
            }}
          >
            Is this business registered for GST?
          </p>
        </Stack>
        {checked && (
          <CustomeTextField
            fullWidth={true}
            smoothCorners={18}
            placeholder="Organization GST"
          />
        )}
      </Stack>
    </Stack>
  );
}

const industries = [
  {
    label: "Agency or Sales House",
  },
  {
    label: "Agriculture",
  },
  {
    label: "Art and Design",
  },
  {
    label: "Automotive",
  },
  {
    label: "Construction",
  },
  {
    label: "Consulting",
  },
  {
    label: "Consumer Packaged Goods",
  },
  {
    label: "Education",
  },
  {
    label: "Engineering",
  },
  {
    label: "Entertainment",
  },
  {
    label: "Financial Services",
  },
  {
    label: "Food Services (Restaurants/Fast Food)",
  },
  {
    label: "Gaming",
  },
  {
    label: "Government",
  },
  {
    label: "Health Care",
  },
  {
    label: "Interior Design",
  },
  {
    label: "Internal",
  },
  {
    label: "Legal",
  },
  {
    label: "Manufacturing",
  },
  {
    label: "Marketing",
  },
  {
    label: "Mining and Logistics",
  },
  {
    label: "Non-Profit",
  },
  {
    label: "Publishing and Web Media",
  },
  {
    label: "Real Estate",
  },
  {
    label: "Retail (E-Commerce and Offline)",
  },
  {
    label: "Services",
  },
  {
    label: "Technology",
  },
  {
    label: "Telecommunications",
  },
  {
    label: "Travel/Hospitality",
  },
  {
    label: "Web Designing",
  },
  {
    label: "Web Development",
  },
  {
    label: "Writers",
  },
];
