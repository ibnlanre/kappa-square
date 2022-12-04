import "@/css/index.css";
import aos from "aos";
import Head from "next/head";
import { MantineProvider } from "@mantine/styles";

import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  function handleRouteChange(url) {
    window["gtag"]("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // document.documentElement.classList.add("text-[18px]");
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
        fontFamily: "Muli, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Muli, sans-serif" },
      }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        {/* put <meta name="viewport" /> here */}
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default App;