import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  keywords: string;
  imgsrc?: string;
  url: string;
}

export default function Meta(Meta: MetaProps) {
  const { title, description, keywords, imgsrc, url } = Meta;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:site_name'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={imgsrc}
        />
        <meta
          property='og:url'
          content={url}
        />
        <link
          rel='canonical'
          href={url}
        />
      </Helmet>
    </>
  );
}
