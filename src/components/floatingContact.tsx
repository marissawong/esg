import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { networks } from "./contact";

export const FloatingContact: FC = () => {
  const [className, setClassName] = useState("");

  const handleScroll = () => {
    const contactSection = document.querySelector("#contato");
    const rect = contactSection?.getBoundingClientRect();

    if (rect) {
      const isInView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      setClassName(isInView ? "hidden" : "");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={`contactIcons ${className}`}>
      {networks
        .filter((n) => n.shortchut)
        .map((n) => (
          <Box
            key={`contato_float_${n.name}`}
            onClick={() => window.open(n.url, "_blank")}
          >
            {n.icon}
          </Box>
        ))}
    </Box>
  );
};
