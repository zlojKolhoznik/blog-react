import {articles, capitalize, categories} from "./App";
import {ArticlePreview} from "./Article";
import {Link, useSearchParams} from "react-router-dom";

export default function Articles() {
    let [search, setSearch] = useSearchParams();
    let category = search.get("category");
    let filteredArticles = articles;
    if (category) {
        filteredArticles = articles.filter(article => article.category === category);
    }
    return (
        <div className="articles">
            <h1 className="title">Articles</h1>
            <CategorySelector />
            <div className="articles-list">
                {filteredArticles.map(article => <ArticlePreview data={article} key={article.id}/>)}
            </div>
        </div>
    )
}

export function CategorySelector() {
    return (
        <div className="category-selector">
            <h3 className="selector-title">Select by category</h3>
            {categories.map(category => <Link to={`/articles?category=${category}`} key={category}>{capitalize(category)}</Link>)}
        </div>
    );
}