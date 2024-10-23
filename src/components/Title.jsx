import React from 'react';

const Title = ({subtitle, title, des}) => {
    return (
        <div className='mt-[100px] text-center'>
            <h2>{subtitle}</h2>
            <h1>{title}</h1>
            
            <p>{des}</p>
            
        </div>
    );
};

export default Title;