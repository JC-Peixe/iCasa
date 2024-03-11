import Post from "componentes/Post";
import Menu from "componentes/Menu";
import styles from "./NaRua.module.css";

import posts from "json/posts.json";

export default function NaRua() {
  return (
    <main>

    <div>
      <Menu />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
            
          </li>
        ))}
        </ul>
    </div>
        </main>
  );
}
