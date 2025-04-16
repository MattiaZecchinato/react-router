// css
import style from './PostListCard.module.css';

export default function PostCard({ title, content }) {

    return <div className={style.cardBox}>
        <h2>{title}</h2>
        <p>{content}.</p>
    </div>
}