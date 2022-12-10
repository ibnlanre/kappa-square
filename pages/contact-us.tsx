import { ContactUs } from "@/layouts/contactUs";
import Head from "next/head";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <meta name="description" content="contact us for your enquiries" />
        <title>Kappa Square | Contact Us</title>
      </Head>
      <div className="grid content-start w-full h-screen pb-0 overflow-auto clamp-body">
        <ContactUs />
      </div>
    </>
  );
}
