import Head from 'next/head';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Proyecto SEO</title>
        <meta name="description" content="Página de contacto para consultas sobre servicios SEO y desarrollo web con Next.js." />
        <meta name="keywords" content="Contacto, SEO, desarrollo web, Next.js, Vercel" />

        <meta property="og:title" content="Contacto | Mi Proyecto SEO" />
        <meta property="og:description" content="Página de contacto para consultas sobre servicios SEO y desarrollo web con Next.js." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-proyecto-seo.vercel.app/contacto" />
        <meta property="og:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Mi Proyecto SEO" />
        <meta name="twitter:description" content="Página de contacto para consultas sobre servicios SEO y desarrollo web con Next.js." />
        <meta name="twitter:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <link rel="canonical" href="https://mi-proyecto-seo.vercel.app/contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Página de Contacto</h1>
    </>
  );
}
