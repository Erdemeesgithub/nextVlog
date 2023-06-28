import Head from "next/head";
import Typography from "@mui/joy/Typography";

export default function App({ article }) {
  if (!article) return <div>Not found...</div>;

  return (
    <>
      <Head>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.social_image} />
        <meta property="og:description" content={article.description} />
      </Head>
      <Typography component="div">
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
      </Typography>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`);
  const data = await res.json();
  return { props: { article: data } };
}
