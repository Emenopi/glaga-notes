import Image from "next/image";
import Head from 'next/head'
import Navbar from "./Navbar";
import Header from "./Header";
import Homepage from "./Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>GlaGA Notes</title>
        <meta name="description" content="GA Computer Science Notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Navbar />
        <Homepage />
      </main>
    </>
  );
}
