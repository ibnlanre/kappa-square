import { AboutUs } from "@/layouts/aboutUs";
import Head from "next/head";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <meta name="description" content="about-us" />
        <title>About Us</title>
      </Head>
      <AboutUs />
    </>
  );
}
