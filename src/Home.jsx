import {ArticlePreview} from "./Article";
import {articles} from "./App";

export default function Home() {
    let ids = getArticlesIds();
    return (
        <div className="home">
            <h1 className="title">The best blog in the world</h1>
            <div className="articles-list">
                <ArticlePreview data={articles[ids[0]]}/>
                <ArticlePreview data={articles[ids[1]]}/>
                <ArticlePreview data={articles[ids[2]]}/>
            </div>
        </div>
    );
}

const getArticlesIds = () => {
    let result = [];
    while (result.length < 3) {
        let id = Math.floor(Math.random() * articles.length);
        if (!result.includes(id)) {
            result.push(id);
        }
    }
    return result;
}