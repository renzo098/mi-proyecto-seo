import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Explora artículos de SEO, programación y desarrollo web con Next.js." />
        <meta name="keywords" content="Blog SEO, artículos Next.js, programación web, Vercel" />

        <meta property="og:title" content="Blog | Mi Proyecto SEO" />
        <meta property="og:description" content="Explora artículos de SEO, programación y desarrollo web con Next.js." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-proyecto-seo.vercel.app/blog" />
        <meta property="og:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Mi Proyecto SEO" />
        <meta name="twitter:description" content="Explora artículos de SEO, programación y desarrollo web con Next.js." />
        <meta name="twitter:image" content="https://mi-proyecto-seo.vercel.app/images/seo-image.png" />

        <link rel="canonical" href="https://mi-proyecto-seo.vercel.app/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Bienvenido al Blog</h1>
    </>
  );
}
