"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-[url('/slider/1.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/2.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/3.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/4.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/5.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/6.jpg')] h-screen -mt-[70px] bg-cover bg-center"></div>
          </SwiperSlide>
        </Swiper>
      </main>
      <Footer />
    </div>
  );
}
