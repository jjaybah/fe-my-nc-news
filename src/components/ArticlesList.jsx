import ArticleCard from "./ArticleCard";

export default function ArticlesList({ articles }) {
  return (
    <ul className="articles__list">
      <h2>Recent Articles</h2>
      <div className="articles__grid">
        {articles.map((article) => {
          return (
            <ul key={article.article_id} className="articles__container">
              <ArticleCard article={article} />
            </ul>
          );
        })}
      </div>
    </ul>
  );
}
