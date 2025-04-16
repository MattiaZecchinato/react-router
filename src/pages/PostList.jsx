import { useEffect, useState } from "react";
import axios from "axios";

// Post card
import PostCard from "../components/PostListCard";

export default function PostList() {

    const uri = 'https://jsonplaceholder.typicode.com/posts';

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {

        axios.get(uri)
            .then(res => setPostsList(res.data))
            .catch(err => console.log(err))
    }, []);

    return <div className="posts-container">
    
        <h1>Recent Posts</h1>
        {postsList.map(elem => <PostCard key={elem.id} title={elem.title} content={elem.body} />)}
    
    </div>
}