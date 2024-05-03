import { Stack, InputAdornment } from "@mui/material";
import CustomeButton from "@/app/components/CustomeButton";
import CustomeTextField from "@/app/components/CustomeTextField";
import atIcon from "../../../public/icons/at.png";
import userIcon from "../../../public/icons/user.png";

export default function SignUpForm() {
  
  return (
    <Stack gap={2}>
      <CustomeTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={userIcon.src} width={24} alt="" />
            </InputAdornment>
          ),
        }}
        fullWidth={true}
        smoothCorners={18}
        // width={"300px"}
        height={50}
        placeholder="Enter your name"
      />
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
        height={50}
        placeholder="Email address or mobile number"
      />
      <CustomeButton
        smoothCorners={18}
        fullWidth={true}
        backgroundColor={"#0080FF"}
        height={"50px"}
        // width={"300px"}
      >
        Create an account
      </CustomeButton>
    </Stack>
  );
}
