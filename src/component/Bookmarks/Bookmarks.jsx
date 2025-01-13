import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"
export default function Bookmarks({bookmarks}){

    return (
        <div className="w-1/3 bg-[#1111110D] p-6 m-4 ">
            <h2 className="text-2xl font-semibold" >Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}