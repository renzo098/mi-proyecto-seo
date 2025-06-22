import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Página principal optimizada con Next.js para mejorar SEO." />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Descubre contenido optimizado con Next.js y SEO avanzado." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>
      <h1>Bienvenido a la página de inicio</h1>
    </>
  );
}

