import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        image: Image1,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  👍",
    },
    {
        id: 2,
        image: Image3,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.  👍",
    },
];


const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <h2 className="section__title">Témoignages</h2>
            <Swiper className="testimonials__container grid" modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonials__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section >
    )
}

export default Testimonials