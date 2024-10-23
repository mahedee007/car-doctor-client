import React from "react";
import slide1 from "../../../assets/images/banner/1.jpg"
import slide2 from "../../../assets/images/banner/2.jpg"
import slide3 from "../../../assets/images/banner/3.jpg"
import slide4 from "../../../assets/images/banner/4.jpg"
import slide5 from "../../../assets/images/banner/5.jpg"
import slide6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img
          src={slide1}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white  flex space-y-48">
            <div className="space-y-4 w-[500px] flex flex-col justify-center pl-10">
                <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex gap-3 justify-end  left-1/2 lg:left-[85%] top-[85%]">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full  ">
        <img
          src={slide2}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white  flex space-y-48">
            <div className="space-y-4 w-[500px] flex flex-col justify-center pl-10">
                <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex gap-3 justify-end left-1/2  lg:left-[85%] top-[85%]">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full  ">
        <img
          src={slide3}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white  flex space-y-48">
            <div className="space-y-4 w-[500px] flex flex-col justify-center pl-10">
                <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex gap-3 justify-end left-1/2  lg:left-[85%] top-[85%]">
          <a href="#slide2" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full  ">
        <img
          src={slide4}
          className="w-full"
        />
        <div className="absolute top-0 left-0 right-0  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white  flex space-y-48">
            <div className="space-y-4 w-[500px] flex flex-col justify-center pl-10">
                <h1 className="font-bold text-6xl">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-3">
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline">Latest Project</button>
                </div>
            </div>
        </div>
        <div className="absolute flex gap-3 justify-end left-1/2  lg:left-[85%] top-[85%]">
          <a href="#slide3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      
     
    </div>
  );
};

export default Banner;
