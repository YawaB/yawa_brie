import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/images/clients/avatar1.jpg";
import AVATAR2 from "../../assets/images/clients/avatar2.jpg";
import AVATAR3 from "../../assets/images/clients/avatar3.jpg";
import AVATAR4 from "../../assets/images/clients/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    avatar: AVATAR1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "CEO",
    avatar: AVATAR2,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    name: "John Smith",
    title: "CEO",
    avatar: AVATAR3,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    name: "Jane Smith",
    title: "CEO",
    avatar: AVATAR4,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="container testimonials__container mySwiper"
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide>
            <article className="testimonial" key={testimonial.id}>
              <div className="client__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <small className="client__review>">{testimonial.quote}</small>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
