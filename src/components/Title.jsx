import React from 'react';

const Title = ({subtitle, title, des}) => {
    return (
        <div className='mt-[100px] text-center space-y-[20px]'>
            <h2 className='text-primary text-[20px] font-bold'>{subtitle}</h2>
            <h1 className='text-[45px] font-semibold text-[#151515]'>{title}</h1>
            
            <p className='text-[#737373] w-[700px] mx-auto'>{des}</p>
            
        </div>
    );
};

export default Title;