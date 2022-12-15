import aos from "aos";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { DrawerAside } from "@/components/drawerAside";
import { MenuAside } from "@/components/menuAside";
import { NavBarMenu } from "@/components/navBarMenu";

import logo from "@/assets/logo.png";
import "../styles/index.css";
import "aos/dist/aos.css";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  function handleRouteChange(url) {
    // window["gtag"]("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    //   page_path: url,
    // });
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        primaryColor: "accent",
        colorScheme: "light",
        fontFamily: "Switzer, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Switzer, sans-serif" },
      }}
    >
      <Head>
        <link rel="icon" href={logo.src} />
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        {/* put <meta name="viewport" /> here */}
      </Head>
      <div className="flex">
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
