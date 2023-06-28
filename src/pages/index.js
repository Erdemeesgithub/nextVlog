import { Card, CardContent } from "@mui/joy";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=whitep4nth3r")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <div>
        <Head>
          <meta property="og:title" content="Join us on Erdem's Vlog post ;)" />
          <meta
            property="og:image"
            content="https://i.pinimg.com/564x/5c/b0/2a/5cb02a70ecc01536cb4d5579ef6f2379.jpg"
          />
        </Head>
        {articles.map((article) => (
          <Card key={article.id} color="success" variant="outlined">
            <CardContent>
              <a href={`/${article.slug}`}>{article.title}</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
