import { Stack } from "@mui/material";
import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <Stack direction={"row"} width={"100vw"} height={"100dvh"}>
        <SideNavBar />
        <Stack width={"calc(100% - 300px)"} p={2}>
          <TopNavBar />
          {children}
        </Stack>
      </Stack>
    </main>
  );
}
