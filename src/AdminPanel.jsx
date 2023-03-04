import {useState} from "react";
import {articles, capitalize, categories} from "./App";

let loggedIn, setLoggedIn;

const loginSubmit = event => {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    if (login === "admin" && password === "admin") {
        setLoggedIn(true);
    }
}

const addArticle = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const text = event.target.text.value;
    const category = event.target.category.value;
    const imageURL = URL.createObjectURL(event.target.photo.files[0]);
    articles.push({id: articles.length, title: title, text: text, category: category, imageUrl: imageURL});
    alert("Article successfully added");
    event.target.reset();
}


export default function AdminPanel() {
    [loggedIn, setLoggedIn] = useState(loggedIn);
    return (
        <div className="admin-panel">
            <h1 className="title">Admin panel</h1>
            {!loggedIn && (
                <form onSubmit={loginSubmit}>
                    <h2>Log in</h2>
                    <label htmlFor="login">Login: <input type="text" id="login" name="login"/></label>
                    <label htmlFor="password">Password: <input type="password" name="password" id="password"/></label>
                    <input type="submit" value="Log in"/>
                </form>
            )}
            {loggedIn && (
                <form onSubmit={addArticle}>
                    <h2>Add new article</h2>
                    <label htmlFor="title">Title: <input type="text" id="title" name="title" required={true}/></label>
                    <label htmlFor="text">Text: <textarea name="text" id="text" cols="30" rows="10" required={true}/></label>
                    <label htmlFor="category">Category:<select id="category" name="category" required={true}>
                        <option value="">---Select an option---</option>
                        {categories.map(category => <option value={category}>{capitalize(category)}</option>)}
                    </select></label>
                    <label htmlFor="photo">Photo: <input type="file" id="photo" name="photo" accept="image/png" required={true}/></label>
                    <input type="submit" value="Add"/>
                </form>
            )}
        </div>
    );
}