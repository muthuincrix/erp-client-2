import { Stack, Typography, Popover } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { SmoothCorners } from "react-smooth-corners";

export default function MasterAddButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack>
      <CustomeButton
        startIcon={<AddSharpIcon />}
        smoothCorners={8}
        backgroundColor={"#0080FF"}
        aria-describedby={id}
        onClick={handleClick}
      >
        Add
      </CustomeButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              "--smooth-corners": 12,
              backgroundColor: "#888888",
              maskImage: "paint(smooth - corners)",
              "-webkit-mask-image": "paint(smooth-corners)",
              marginTop: "10px"
            },
          },
        }}
      >
        <SmoothCorners style={{ display: "none" }} />
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Stack>
  );
}
