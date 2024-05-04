import { Stack, InputAdornment } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeTextField from "@/app/components/CustomeTextField";
import atIcon from "../../../public/icons/at.png";

export default function SignInForm() {
  return (
    <Stack gap={2}>
      <CustomeTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={atIcon.src} width={24} alt="" />
            </InputAdornment>
          ),
        }}
        fullWidth={true}
        smoothCorners={18}
        // width={"300px"}
        onChange={(e) => console.log(e.target.value)}
        height={50}
        placeholder="Email address or mobile number"
      />
      <CustomeButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#000E33"}
        height={"50px"}
        onClick={() =>alert("Please enter")}
        // width={"300px"}
      >
        Continue to verify
      </CustomeButton>
    </Stack>
  );
}
