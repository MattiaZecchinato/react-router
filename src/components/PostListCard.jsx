import { Link } from 'react-router-dom';

// css
import style from './PostListCard.module.css';

export default function PostCard({ id, title, content }) {

    const linkPost = `/PostList/${id}`;

    return <Link to={linkPost} className={style.cardBox}>
                 <h2>{title}</h2>
                 <p>{content}.</p>
    </Link>
}