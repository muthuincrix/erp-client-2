"use client";
import { Stack, Grid } from "@mui/material";
import Form from "./components/Form";
import Features from "./components/Features";
import VerifyForm from "./components/VerifyForm";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
export default function SignIn() {
  const [isVerify, setVerify] = useState(false);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false)
  useEffect(() =>{
    fetch('/user-isLogin')
    .then((response) => response.json())
    .then((data) => {
        if(data.status === 'success' && data.isLogin) return router.push('/dashboard')
        setLoading(true)
    })
},[])
  return isLoading && (
    <main
      style={{
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "0 40px",
        height: "100vh",
      }}
    >
      <Grid container direction={"row"}>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          {isVerify ? <VerifyForm /> : <Form setVerify={setVerify} />}
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={7}
          xl={7}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Features />
        </Grid>
      </Grid>
    </main>
  );
}
