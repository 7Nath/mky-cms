import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Consulting Firm</title>
        <meta name="description" content="Professional consulting services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}