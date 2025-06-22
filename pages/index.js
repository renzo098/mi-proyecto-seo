import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Página de inicio optimizada con Next.js y técnicas avanzadas de posicionamiento web." />
        <meta name="keywords" content="SEO, Next.js, optimización web, posicionamiento Google, Vercel" />

        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Página de inicio optimizada con Next.js para mejorar posicionamiento web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-proyecto-seo.vercel.app/" />
        <meta property="og:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inicio | Mi Proyecto SEO" />
        <meta name="twitter:description" content="Página de inicio optimizada con Next.js para mejorar posicionamiento web." />
        <meta name="twitter:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <link rel="canonical" href="https://mi-proyecto-seo.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Bienvenido a la página de inicio</h1>
    </>
  );
}

