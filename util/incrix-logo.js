import incrixLogo from "../public/images/incrix-logo.png";
import incrixLogoLight from "../public/images/incrix-logo-light.png";

export function IncrixLogoDark({ width }) {
  return (
    <img
      src={incrixLogo.src}
      style={{
        width: width,
        height: "auto",
        objectFit: "contain",
        objectPosition: "center",
      }}
      alt="Incrix Logo"
    />
  );
}

export function IncrixLogoLight({ width, style }) {
    return (
      <img
        src={incrixLogoLight.src}
        style={{
          width: width,
          height: "auto",
          objectFit: "contain",
          objectPosition: "center",
          ...style
        }}
        alt="Incrix Logo"
      />
    );
}
