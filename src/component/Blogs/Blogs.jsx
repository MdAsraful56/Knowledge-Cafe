import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6


export default function Blogs({handleAddToBookmark}){

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    } ,[])

    return (
        <div className="w-2/3">
            {/* <h3>{blogs.length}</h3> */}
            {
                blogs.map(blog => 
                <Blog
                    key={blog.id} blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func
}