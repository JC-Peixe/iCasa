import styles from "./Acoes.module.css";

import Menu from "componentes/Menu";
import posts from "json/posts.json";
import Post from "componentes/Post";

export default function NaRua() {
  return (
    <main>
      <Menu />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id} className={styles.liPost}>
            <Post post={post} />
          </li>
         )
        )}
        </ul>
    </main>
  )
}
