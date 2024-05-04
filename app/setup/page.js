'use client'

import { Stack } from "@mui/material"
import GetStarted from "./components/GetStarted"
import SetupForm from "./components/SetupFrom"
import { useEffect } from "react"
export default function Page(){
    useEffect(() =>{
        fetch('/expire')
        .then((response) => response.text())
        .then((data) => console.log(data))
        console.log("setup page")
    },[])
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