import Head from "next/head";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crazy, Fun Mahjong Club Mimacle</title>
        <meta name="description" content="Crazy, Fun Mahjong club Mimacle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
    </>
  );
}
