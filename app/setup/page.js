import { Stack } from "@mui/material"
import GetStarted from "./components/GetStarted"
import SetupForm from "./components/SetupFrom"

export default function Page(){
    return(
        <main style={{
            width: '100%',
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
            background: "#F2F2F2"
        }}>
            {/* <GetStarted /> */}
            <SetupForm />
        </main>
    )
}