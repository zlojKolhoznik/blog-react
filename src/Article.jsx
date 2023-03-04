import {Link, useParams} from "react-router-dom";
import {articles} from "./App";

export default function Article(props) {
    return (
        <div className="article">
            <h2 className="article-title">{props.data.title}</h2>
            <img src={props.data.imageUrl} alt={props.data.title} className="article-image"/>
            <p className="text">{props.data.text}</p>
        </div>
    )
}

export function ArticlePreview(props) {
    return (
        <div className={`article-preview`}>
            <h2 className="preview-title">{props.data.title}</h2>
            <img src={props.data.imageUrl} alt={props.data.title}
                 className={`preview-image`}/>
            <Link to={`/articles/${props.data.id}`}>Read more...</Link>
        </div>
    )
}

export function ArticleById() {
    const {id} = useParams();
    return <Article data={articles.find(article => article.id == id)}/>;
}