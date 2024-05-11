"use client";
import { Stack } from "@mui/material";
import GetStarted from "./components/GetStarted";
import SetupForm from "./components/SetupFrom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const [isSetupBusiness, setUpBusiness] = useState(false);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetch("/api/user-isLogin")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && data.fill_the_details)
          return setLoading(true);
        if (data.status === "error" && !data.isLogin)
          return router.push("/signin");
        if (data.status === "success" && data.isLogin && !data.fill_the_details)
          return router.push("/dashboard");
        setLoading(true);
      });
  }, []);
  return (
    isLoading && (
      <main
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
          background: "#F2F2F2",
        }}
      >
        {isSetupBusiness ? (
          <SetupForm />
        ) : (
          <GetStarted setUpBusiness={setUpBusiness} />
        )}
      </main>
    )
  );
}
