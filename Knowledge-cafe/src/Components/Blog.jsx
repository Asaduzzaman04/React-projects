import moment from "moment";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, addBookmark, HandleRead}) => {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags, } = blog

    const currentDate = moment().diff(moment(posted_date), 'years');
    console.log(currentDate)

    return (
        <div className="mb-5 flex flex-col">
            <figure>
                <img className=" rounded-md w-full md:h-80" src={cover} alt="" />
            </figure>
            <div className="mt-4 flex flex-col gap-5">
                <div className=" flex items-center justify-between">
                    <div className="flex items-center justify-between gap-3 md:gap-5">
                        <img className=" w-10 h-10 rounded-full object-cover" src={author_img} alt="" />
                        <div className="flex flex-col justify-between">
                            <p>{author}</p>
                            <p>{moment(posted_date).format('MMM D')} ({currentDate} year ago)</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>{reading_time}min read</p>
                        <FaRegBookmark onClick={()=>addBookmark(title)} />
                    </div>
                </div>
                <h1 className=" text-2xl font-bold">{title}</h1>
                {/* hashtags line */}
                <div className="flex gap-3">
                {hashtags.map(hashtag => <span key={hashtag} className=" text-slate-400 text-sm">#{hashtag}</span>)}
                </div>
                <span onClick={()=>HandleRead(reading_time)} className=" cursor-pointer text-blue-700 border-b border-blue-700 w-fit text-sm">Mark as read</span>
            </div>
        </div>
    );
};

export default Blog;