import { useState } from "react";
import ProfilePic from "../assets/Ellipse 1.png"
import Blogs from "../Components/Blogs";
import Bookmarks from "../Components/Bookmarks";
import { getBookmark, getTime, saveBookmark, saveTime } from "../Utilities/localstorage";

const Home = () => {
    const [bookmarks, setBookmarks] = useState(getBookmark())
    const [readingTime, setReadingTime] = useState(getTime())

    const addBookmark = (name)=>{
        const newbookmarks = [...bookmarks]
        if(!newbookmarks.includes(name)){
            newbookmarks.push(name)
            setBookmarks(newbookmarks)
            saveBookmark(name)
        }
    }
    const HandleRead = (time)=>{
        setReadingTime(readingTime+time)
        saveTime(time)
    }
    return (
        <div>
            {/* Navbar */}
            <div className="flex items-center justify-between">
            <h1 className=" font-bold text-2xl md:text-4xl">Knowledge Cafe</h1>
            <img src={ProfilePic} alt="" />
            </div>
            {/* Blogs and BookMarks */}
            <div className="my-12 flex justify-between gap-10">
                <Blogs addBookmark={addBookmark} HandleRead={HandleRead}/>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
            </div>
        </div>
    );
};

export default Home;