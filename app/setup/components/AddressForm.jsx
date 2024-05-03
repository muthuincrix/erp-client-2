import CustomeTextField from "@/app/components/CustomeTextField";
import { Stack } from "@mui/material";

export default function AddressForm() {
    return(
        <Stack gap={2}>
            <CustomeTextField placeholder="Organization address line 1"/>
            <CustomeTextField placeholder="Organization address line 2"/>
            <CustomeTextField placeholder="Enter city"/>
            <CustomeTextField placeholder="Enter State"/>
            <CustomeTextField placeholder="Enter zip code"/>
        </Stack>
    )
}