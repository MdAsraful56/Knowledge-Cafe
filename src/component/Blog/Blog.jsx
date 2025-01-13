import PropTypes from 'prop-types'; // ES6
// import { FaBeer } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
export default function Blog({blog, handleAddToBookmark, handleMarkAsRead}){

    // console.log(blog);
    const {author, author_img, cover, hashtags, posted_date, reading_time, title} = blog;

    return (
        <div className='mb-16'>
            <img className='rounded-lg w-full mb-8' src={cover} alt={`Cover pic title is ${title}`} />
            <div className="flex justify-between ">
                <div className="flex">
                    <img className='w-14' src={author_img} alt="" />
                    <div className="text-left ml-4">
                        <h3 className="text-xl font-semibold text-black">{author}</h3>
                        <p className="text-base text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <p className="text-[#11111199]">{reading_time} min read </p>
                    <button onClick={()=>{handleAddToBookmark(blog)}} className='ml-2 text-center text-xl'> <IoBookmarkOutline/> </button>
                    {/* <img src="../../assets/images/Frame.svg" alt="nai" /> */}
                </div>
            </div>
            <h2 className="text-4xl font-semibold mt-5">{title}</h2>
            <p className='mt-4 text-[#11111199] text-lg font-medium'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span> )
                }
            </p>
            <button onClick={()=>{handleMarkAsRead(reading_time)}} className='text-[#6047EC] mt-4 text-lg font-medium underline '>Mark as read</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}