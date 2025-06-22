import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TAREA 14</title>
        <meta name="title" content="TAREA 14" />
        <meta name="description" content="TAREA DEL LABORATORIO 14" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-proyecto-4myjiz0f0-renzo098s-projects.vercel.app/" />
        <meta property="og:title" content="TAREA 14" />
        <meta property="og:description" content="TAREA DEL LABORATORIO 14" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mi-proyecto-4myjiz0f0-renzo098s-projects.vercel.app/" />
        <meta property="twitter:title" content="TAREA 14" />
        <meta property="twitter:description" content="TAREA DEL LABORATORIO 14" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Head>

      <h1>Bienvenido a la Tarea 14</h1>
    </>
  );
}


