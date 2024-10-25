import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title,img,price}=service;
    return (
        <div className='border border-dotted p-6 mx-auto rounded-[10px]'>
            <img className='w-[314px] h-[208px] rounded-[10px]' src={img} alt="" />
            <div className='space-y-5'>
                <h4 className='text-[25px] font-bold mt-5'>{title}</h4>
                <div className='text-primary flex justify-between items-center'>
                <p className='text-[20px]  font-semibold'>$ {price}</p>
                <Link to={`servicedetails/${_id}`}><FaArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;