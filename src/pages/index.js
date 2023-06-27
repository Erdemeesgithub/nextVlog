import { Card, CardContent } from "@mui/joy";
import { useEffect, useState } from "react";

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
