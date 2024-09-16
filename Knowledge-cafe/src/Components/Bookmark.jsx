import React from 'react';

const Bookmark = ({name}) => {
    return (
        <div className='p-2 bg-white'>
            <p>{name}</p>
        </div>
    );
};

export default Bookmark;