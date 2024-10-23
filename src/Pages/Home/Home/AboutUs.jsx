import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const AboutUs = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-10 mt-9'>
            <div className='w-full relative'>
                <img className='w-[250px] lg:w-[460px] lg:h-[473px] rounded-lg' src={person} alt="" />
                <img className='w-[250px] lg:w-[327px] lg:h-[332px] absolute top-1/2 left-[35%]  border-[10px] border-white rounded-lg'  src={parts} alt="" />
                
            </div>
            <div className='space-y-9 w-full'>
                <h3 className='text-primary text-[20px] font-bold'>About us</h3>
                <h2 className='font-bold text-5xl '>We are qualified & of experience in this field</h2>
                
                <p className='text[#737373] leading-[187.5%] w-[489px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text[#737373] leading-[187.5%] w-[489px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-primary'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;