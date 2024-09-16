import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = ({addBookmark, HandleRead}) => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setArticles(data))
    }, [])

    console.log(articles)

    return (
        <div className="w-2/3">
            {
                articles.map(blog=> <Blog key={blog.id} blog={blog} addBookmark={addBookmark} HandleRead={HandleRead} />)
            }
        </div>
    );
};

export default Blogs;