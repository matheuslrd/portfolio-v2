import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
}

const defaultTitle = 'Matheus Laurindo - Desenvolvedor Full Stack';
const defaultDescription = 'Portfólio de Matheus Laurindo - Desenvolvedor Web Full Stack. Conheça meus projetos e habilidades em desenvolvimento web.';
const defaultKeywords = 'matheus laurindo, desenvolvedor, programador, full stack, web development, react, typescript, javascript, node.js';
const defaultOgImage = '/images/og-image.jpg';
const defaultUrl = 'https://www.matheuslaurindo.com/';

export function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogUrl = defaultUrl,
  twitterCreator = '@matheuslrd_',
  canonicalUrl = defaultUrl,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Matheus Laurindo" />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#5d2de2" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Matheus Laurindo',
          url: defaultUrl,
          sameAs: [
            'https://www.linkedin.com/in/matheuslrd/',
            'https://github.com/matheuslrd',
          ],
          jobTitle: 'Desenvolvedor Web Full Stack',
          worksFor: {
            '@type': 'Organization',
            name: 'Compliance Station',
          },
          image: defaultOgImage,
          description: defaultDescription,
        })}
      </script>
    </Helmet>
  );
}
