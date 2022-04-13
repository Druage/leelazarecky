import Head from "next/head";

export default function PageHead() {
  return (
    <Head>
      <title>Lee Lazarecky</title>
      <meta name="description" content="A portfolio for Lee Lazarecky" />
      <link rel="icon" href="/favicon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"true"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
