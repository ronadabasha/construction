"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import {
  ChevronRight,
  Email,
  Facebook,
  Instagram,
  Phone,
} from "@/components/icons";
import Check from "@/components/icons/check";

export default function Home() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

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
            <div className="bg-[url('/slider/1.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
            <div className="bg-[url('/slider/2.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
            <div className="bg-[url('/slider/3.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
            <div className="bg-[url('/slider/4.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
            <div className="bg-[url('/slider/5.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
            <div className="bg-[url('/slider/6.jpg')] h-screen -mt-[70px] bg-cover bg-center bg-center">
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
          className="bg-[url('/slider/3.jpg')] bg-cover bg-center bg-center bg-fixed"
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
        <div id="projects" className="bg-[#18776A] text-[#ffffffed] py-14">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-xl font-bold mb-6">Projektet tona</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              odio cupiditate, quas ut nihil corporis tempore perferendis.
            </p>
            <LightGallery
              elementClassNames="grid gap-5 grid-cols-5"
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail]}
            >
              <a href="gallery/1.jpg" className="block">
                <div className="bg-[url('/gallery/1.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/1.jpg" />
                </div>
              </a>
              <a href="gallery/2.jpg" className="block">
                <div className="bg-[url('/gallery/2.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/2.jpg" />
                </div>
              </a>
              <a href="gallery/3.jpg" className="block">
                <div className="bg-[url('/gallery/3.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/3.jpg" />
                </div>
              </a>
              <a href="gallery/4.jpg" className="block">
                <div className="bg-[url('/gallery/4.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/4.jpg" />
                </div>
              </a>
              <a href="gallery/5.jpg" className="block">
                <div className="bg-[url('/gallery/5.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/5.jpg" />
                </div>
              </a>
              <a href="gallery/6.jpg" className="block">
                <div className="bg-[url('/gallery/6.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/6.jpg" />
                </div>
              </a>
              <a href="gallery/7.jpg" className="block">
                <div className="bg-[url('/gallery/7.jpg')] bg-cover bg-center w-full h-[200px]">
                  <img className="img-responsive hidden" src="gallery/7.jpg" />
                </div>
              </a>
            </LightGallery>
          </div>
        </div>
        <div className="h-[400px]"></div>
        <div id="contact" className="w-full bg-[#3D4047] py-10 text-white">
          <div className="max-w-6xl mx-auto flex justify-between">
            <ul className="w-1/4">
              <li>
                <h2 className="mb-10">Basha Construction</h2>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="/" className="flex -ml-[10px] py-1">
                  <ChevronRight /> Kreu
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#about" className="flex -ml-[10px] py-1">
                  <ChevronRight /> Rreth nesh
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#projects" className="flex -ml-[10px] py-1">
                  <ChevronRight /> Projekte
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#contact" className="flex -ml-[10px] py-1">
                  <ChevronRight /> Kontakt
                </Link>
              </li>
            </ul>
            <ul className="w-1/4">
              <li>
                <h2 className="mb-10">Our Services</h2>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#" className="flex -ml-[10px] py-1">
                  <Check /> Interior Renovation
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#about" className="flex -ml-[10px] py-1">
                  <Check /> Design & Build
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#projects" className="flex -ml-[10px] py-1">
                  <Check /> Tiling & Painting
                </Link>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <Link href="#contact" className="flex -ml-[10px] py-1">
                  <Check /> Solar Systems
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-10">
                <h2>Kontakt</h2>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <a href="" className="flex py-1">
                  <Phone />
                  <span className="ml-2">+355 68 368 3636</span>
                </a>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <a href="" className="flex py-1">
                  <Email />
                  <span className="ml-2">basha.construction@gmail.com</span>
                </a>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <ul className="flex items-center py-1">
                  <li className="inline-block mr-3">Na ndiqni:</li>
                  <li className="inline-block">
                    <a href="">
                      <Instagram />
                    </a>
                  </li>
                  <li className="inline-block">
                    <a href="">
                      <Facebook />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
