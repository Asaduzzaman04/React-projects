const getTime = ()=>{
    const readingTime = localStorage.getItem("readingTime")
    if(readingTime){
        return Number(readingTime)
    }
    return 0
}

const saveTime = (time)=>{
    const readingTime = getTime()
    const newTime = Number(readingTime)+time
    localStorage.setItem("readingTime", newTime)
}

const getBookmark = ()=>{
    const bookmarks = localStorage.getItem("BOOKMARKS")
    if(bookmarks){
        return JSON.parse(bookmarks)
    }return []
}

const saveBookmark = (name)=>{
    const bookmarks = getBookmark()
    bookmarks.push(name)
    const bookmarksStr = JSON.stringify(bookmarks)
    localStorage.setItem("BOOKMARKS", bookmarksStr)
}

export {getTime, saveTime, getBookmark, saveBookmark}
