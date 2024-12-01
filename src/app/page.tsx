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
            <div className="bg-[url('/slider/1.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Punime Dekorative</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/2.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Pllaka dhe parkete</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/3.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Hidrosanitare</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/4.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Punime Dekorative</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/5.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Punime Dekorative</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/6.jpg')] h-screen -mt-[70px] bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-[300px]">
                <h1 className="text-xl font-bold mb-8">Punime Dekorative</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio aliquam itaque dolorum.
                </p>
                <button className="bg-[#18776A] text-[#ffffffed] px-6 py-3 mt-8">
                  Shiko me shume
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          id="about"
          className="bg-[url('/slider/3.jpg')] bg-cover bg-center bg-fixed"
        >
          <div className="bg-[#ffffffed] py-14 ">
            <div className="h-[300px] max-w-6xl mx-auto ">
              <h2 className="text-xl font-bold mb-6">Rreth nesh</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                odio cupiditate, quas ut nihil corporis tempore perferendis odit
                officiis esse, voluptatibus optio voluptas culpa rem nobis? Hic
                tempora officiis maiores?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                ex, quis nesciunt totam obcaecati facilis! Exercitationem sit
                aliquam quas odio. Commodi, maiores ipsum. Illum consequatur
                aperiam eligendi beatae unde facere. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Enim soluta labore unde odit ipsa
                eligendi cupiditate quia, pariatur deleniti voluptates dicta
                quam vero expedita id quos similique repudiandae nisi? Voluptas?
              </p>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="h-[300px] bg-[#18776A] text-[#ffffffed] py-14"
        >
          <div className="h-[300px] max-w-6xl mx-auto ">
            <h2 className="text-xl font-bold mb-6">Projektet tona</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              odio cupiditate, quas ut nihil corporis tempore perferendis.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
