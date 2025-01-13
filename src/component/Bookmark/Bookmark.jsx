import PropTypes from "prop-types";
export default function Bookmark({bookmark}){

    const {title} = bookmark;

    return (
        <div className="bg-white px-2 py-4 mx-2 my-4 rounded-lg">
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
    )
}

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}