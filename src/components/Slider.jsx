// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const certifications = [
  {
    title: "C++ programming - Udemy",
    date: "Aug 2023",
    image: "/certificates/c++_cer.jpg",
  },
  {
    title: "Crash Course on Python - Google",
    date: "Aug 2023",
    image: "/certificates/pyt_cer.png",
  },
  {
    title: "Introduction to Cybersecurity Tools",
    date: "Mar 2023",
    image: "/certificates/cyb_cer.png",
  },
  {
    title: "Ethical Hacking Basics",
    date: "Sept 2022",
    image: "/certificates/eth_cer.png",
  },
  {
    title: "Web Development Training (Internshala)",
    date: "Jun 2022",
    image: "/certificates/web_dev_cer.png",
  },
  {
    title: "Cybersecurity Roles, Processes & Operating System Security (Google)",
    date: "Apr 2023",
    image: "/certificates/cyb_2_cer.png",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{delay: 3000}}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center overflow-hidden rounded-lg"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-cover object-center rounded-t-lg"
            />
            <div className="absolute bottom-0 text-white z-20 bg-red-800 w-full p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>
              <p className="text-sm">{cert.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
