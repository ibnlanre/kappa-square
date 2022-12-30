import aos from "aos";

import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { Jost } from "@next/font/google";

import { DrawerAside } from "@/components/drawerAside";
import { MenuAside } from "@/components/menuAside";
import { NavBarMenu } from "@/components/navBarMenu";
import { FavIcon } from "@/components/favIcon";

import "../styles/index.css";
import "aos/dist/aos.css";

const jost = Jost({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jost",
});

function App({ Component, pageProps }) {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        colors: {
          accent: [
            "#F9E3E3",
            "#F1C8C7",
            "#EAAEAD",
            "#E59695",
            "#E0817E",
            "#DE6D69",
            "#DD5A56",
            "#DE4942",
            "#E1261C",
            "#C81107",
          ],
        },
        fontFamily: "Jost, sans-serif",
        primaryColor: "accent",
        colorScheme: "light",
      }}
    >
      <FavIcon />
      <div
        className={`${jost.variable} flex font-sans text-base overflow-auto`}
      >
        <MenuAside setIsContactDrawerOpen={setIsContactDrawerOpen} />
        <NavBarMenu />
        <Component {...pageProps} />
        <DrawerAside
          setIsDrawerOpen={setIsContactDrawerOpen}
          isDrawerOpen={isContactDrawerOpen}
        />
      </div>
    </MantineProvider>
  );
}

export default App;
