import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"
export default function Bookmarks({bookmarks, readingTime}){

    return (
        <div className="lg:w-1/3 md:w-1/3 w-full bg-[#1111110D] p-6 m-4 ">
            <div className="">
                <h3 className="text-2xl font-semibold border-2 rounded-lg bg-blue-100 border-[#6047EC] text-[#6047EC] py-4 px-4 mb-8">Reading Time: {readingTime} min </h3>
            </div>
            <h2 className="text-2xl font-semibold" >Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}