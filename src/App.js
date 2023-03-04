import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {ArticleById} from "./Article";
import Articles from "./Articles";
import Home from "./Home";
import AdminPanel from "./AdminPanel";

export const capitalize = str => str[0].toUpperCase() + str.slice(1);
export let categories = ["Food", "Lifestyle", "Sport", "Games", "Music"];
export let articles = [
  {
    id: 0,
    title: "How to cook a pizza",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Food",
    imageUrl: "/img/pizza.png"
  },
  {
    id: 1,
    title: "How to cook a burger",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Food",
    imageUrl: "/img/burger.png"
  },
  {
    id: 2,
    title: "How to choose a trainer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Lifestyle",
    imageUrl: "/img/trainer.png"
  },
  {
    id: 3,
    title: "Cactus - the best plant",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Lifestyle",
    imageUrl: "/img/cactus.png"
  },
  {
    id: 4,
    title: "Messi transfer rumors",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Sport",
    imageUrl: "/img/messi.png"
  },
  {
    id: 5,
    title: "How to play chess",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Sport",
    imageUrl: "/img/chess.png"
  },
  {
    id: 6,
    title: "New Assassin's Creed - game of the year or a great disappointment?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Games",
    imageUrl: "/img/assassins-creed.png"
  },
  {
    id: 7,
    title: "Another Skyrim challenge completed",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Games",
    imageUrl: "/img/skyrim.png"
  },
  {
    id: 8,
    title: "Ukrainian band 'Hatespeech' releases a long-awaited 'Song about chamomile'",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Music",
    imageUrl: "/img/hatespeech.png"
  },
  {
    id: 9,
    title: "Concerts of the year 2023 in Kyiv",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dolore ea esse est excepturi expedita, facere harum illum ipsum iure nemo nihil nobis quae recusandae reprehenderit sit sunt ut veritatis. Aspernatur assumenda, at beatae dicta impedit ipsa iure magnam maxime minus officiis quo repellendus sint, soluta tenetur, velit.",
    category: "Music",
    imageUrl: "/img/concert.png"
  }
];

function App() {
  return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/admin">Add article</Link>
        </nav>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/articles/:id" element={<ArticleById/>}/>
          <Route path="/admin" element={<AdminPanel />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
  );
}

export default App;
