import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6


export default function Blogs({handleAddToBookmark, handleMarkAsRead}){

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    } ,[])

    return (
        <div className="lg:w-2/3 md:w-2/3 w-full ">
            {/* <h3>{blogs.length}</h3> */}
            {
                blogs.map(blog => 
                <Blog
                    key={blog.id} blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}