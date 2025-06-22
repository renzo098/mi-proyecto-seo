import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Lee artículos optimizados con técnicas SEO para Next.js." />
        <meta property="og:title" content="Blog | Mi Proyecto SEO" />
        <meta property="og:description" content="Explora temas de desarrollo web, SEO y Next.js en nuestro blog." />
        <meta property="og:image" content="/images/blog-image.png" />
      </Head>
      <h1>Blog</h1>
    </>
  );
}
