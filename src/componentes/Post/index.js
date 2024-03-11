import styles from "./Post.module.css"

export default function Post ({post}){
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                scr={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
                >
            </img>

        </div>
    )
}