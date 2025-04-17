import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//axios
import axios from "axios";

// Card post
import PostCard from "../components/PostListCard";

export default function Post() {

    const { id } = useParams();
    console.log(` post id: ${id}`);

    const [post, setPost] = useState({});

    const uri = `https://jsonplaceholder.typicode.com/posts/`;

    useEffect(() => {

        axios.get(uri)
            .then(res => {

                const currentPost = res.data.find(elem => elem.id === parseInt(id));
                
                setPost(currentPost);
            })
            .catch(err => console.log(err))
    }, []);

    return <>

        <PostCard title={post.title} content={post.body}/>
    </>
}