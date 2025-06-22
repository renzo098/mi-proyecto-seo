import Head from 'next/head';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Proyecto SEO</title>
        <meta name="description" content="Contáctanos para más información sobre desarrollo y SEO en Next.js." />
        <meta property="og:title" content="Contacto | Mi Proyecto SEO" />
        <meta property="og:description" content="Envíanos tus consultas sobre optimización SEO en aplicaciones Next.js." />
        <meta property="og:image" content="/images/contact-image.png" />
      </Head>
      <h1>Página de contacto</h1>
    </>
  );
}
