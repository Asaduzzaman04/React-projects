
import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    
    
    return (
        <div className="w-1/3 text-center">
            <div className=" rounded-md p-2 bg-pink-300">
            <h1>Spent time on read:{readingTime}min</h1>
            </div>
            <div className="p-2 bg-slate-50 flex flex-col gap-2">
               <h1>Bookmarked Blogs:  {bookmarks.length}</h1>
                {
                    bookmarks.map(name=> <Bookmark key={name} name={name}/>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;