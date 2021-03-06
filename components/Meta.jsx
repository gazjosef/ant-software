import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ant Software Dev | Embiggened Innovation",
  keywords: "web design, web development",
  description:
    "Get scalable, modern and reliable custom software and let your business grow.",
};
