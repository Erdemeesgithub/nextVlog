import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App() {
  const router = useRouter();

  const { slug } = router.query;

  const [article, setArticle] = useState();

  useEffect(() => {
    if (slug) {
      fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setArticle(data);
        });
    }
  }, [slug]);

  console.log({ article });

  if (!article) return <div>Loading...</div>;

  return (
    <>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </>
  );
}
