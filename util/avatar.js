import f1 from "@/public/avatar/f1.png";
import f2 from "@/public/avatar/f2.png";
import f3 from "@/public/avatar/f3.png";
import f4 from "@/public/avatar/f4.png";
import m1 from "@/public/avatar/m1.png";
import m2 from "@/public/avatar/m2.png";
import m3 from "@/public/avatar/m3.png";
import m4 from "@/public/avatar/m4.png";
import { Stack } from "@mui/material";

export default function Avatar(props) {
  return (
    <Stack {...props}>
      <img
        
        src={
          props.character === "f1"
            ? f1.src
            : props.character === "f2"
            ? f2.src
            : props.character === "f3"
            ? f3.src
            : props.character === "f4"
            ? f4.src
            : props.character === "m1"
            ? m1.src
            : props.character === "m2"
            ? m2.src
            : props.character === "m3"
            ? m3.src
            : props.character === "m4"
            ? m4.src
            : null
        }
        alt={props.character}
        style={{
          width: "100%",
          height:"100%",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Stack>
  );
}
