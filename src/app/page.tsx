"use client";
import { useState } from "react";
import Image from "next/image";

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
  Instagram,
  Phone,
  Location,
} from "@/components/icons";
import Check from "@/components/icons/check";
import { slides } from "@/data/slider";
import type { Swiper as SwiperType } from "swiper/types";
import { gallery } from "@/data/gallery";
import { services } from "@/data/services";
import { routes } from "@/data/routes";

export default function Home() {
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]); // preload first slide

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const nextIndex = swiper.activeIndex + 1;

    setLoadedSlides((prev) => {
      const newSlides = [swiper.activeIndex];
      if (nextIndex < slides.length) {
        newSlides.push(nextIndex); // preload the next slide
      }
      return [...new Set([...prev, ...newSlides])];
    });
  };

  return (
    <div>
      <Header />
      <main>
        <div className="-mt-[70px] z-10 relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay
            scrollbar={{ draggable: true }}
            onSlideChange={handleSlideChange}
          >
            {slides.map((slide, index) => {
              const isLoaded = loadedSlides.includes(index);
              return (
                <SwiperSlide key={index}>
                  <div
                    className="h-screen bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: isLoaded
                        ? `url(${slide.image})`
                        : "none",
                      backgroundColor: isLoaded ? "transparent" : "#e5e7eb", // Tailwind gray-200
                    }}
                  >
                    <div className="relative max-w-6xl h-screen mx-auto">
                      <div className="absolute bg-[#00000094] text-white max-w-full mx-6 md:mx-0 md:max-w-[500px] p-8 left-0 bottom-6 md:bottom-auto md:top-1/2 -mt-[22px]">
                        <h1 className="text-xl font-urbanist font-bold mb-8">
                          {slide.title}
                        </h1>
                        <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />
                        <p className="font-urbanist font-medium">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          id="about"
          className="bg-[url('/slider/3.jpg')] bg-cover bg-center bg-fixed"
        >
          <div className="bg-[#ffffffed] py-10 md:py-20 px-6 md:px-0">
            <div className="max-w-6xl mx-auto text-center ">
              <h2 className="text-xl md:text-2xl font-urbanist font-bold mb-6">
                About Us
              </h2>
              <hr className="border-t-2 border-[#18776A] w-[50px] mx-auto mb-6" />
              <p className="text-md md:text-lg mb-4 font-urbanist font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat, quasi eligendi ea in ab odit nisi veritatis.
              </p>
              <p className="text-md md:text-lg mb-4 font-urbanist font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                eligendi alias incidunt neque, tempore perferendis molestiae
                rerum eum placeat, sint quo. Voluptatum nihil dolore earum. Sunt
                neque iusto nihil modi.
              </p>
              <p className="text-md md:text-lg mb-4 font-urbanist font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                delectus magnam tempore facere nesciunt eligendi.
              </p>
              <p className="text-md md:text-lg mb-4 font-urbanist font-medium">
                Lorem ipsum distinctio et, eius aliquid quis excepturi
                laudantium ipsa ratione at facere? Optio facere non odio
                possimus nobis consectetur.
              </p>
              <p className="text-md md:text-lg font-urbanist font-medium">
                <strong>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="bg-[#18776A] text-[#ffffffed] py-10 md:py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-urbanist font-bold mb-6">
              Our projects
            </h2>
            <hr className="border-t-2 border-[#ffffff] w-[50px] mx-auto mb-6" />
            <p className="text-md mb-6 max-w-screen-md mx-auto font-urbanist font-regular px-6 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque repellat quod molestiae repellendus eos ab, nihil velit
              cupiditate sunt debitis saepe illum nam dolore possimus vitae non
              voluptas amet sit.
            </p>
            <LightGallery
              elementClassNames="grid gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6 xl:px-0"
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail]}
            >
              {gallery.map((item) => {
                return (
                  <a key={item.id} href={item.image} className="block">
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                      className="bg-cover bg-center w-full h-[100px] sm:h-[200px]"
                    >
                      <Image
                        className="img-responsive hidden"
                        src={item.image}
                        width={50}
                        height={50}
                        alt="construction"
                      />
                    </div>
                  </a>
                );
              })}
            </LightGallery>
          </div>
        </div>
        <div
          id="contact"
          className="md:flex w-full max-w-[768px] xl:max-w-6xl justify-between py-10 md:py-20 px-6  md:px-0 md:mx-auto"
        >
          <div className="flex lg:justify-center xl:items-center mb-6 md:mb-0">
            <a href="tel: 00355 3245435345">
              <div className="hidden xl:flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Phone className="w-10 h-10 bg-[#18776A]" />
              </div>
            </a>
            <div className="flex flex-col md:ml-5 lg:ml-10">
              <span className="text-[#18776A] font-urbanist font-bold">
                Tel:
              </span>
              <a
                href="tel: 00355 3245435345"
                className="font-urbanist font-medium"
              >
                +355 3245435345
              </a>
              <a
                href="tel: 00355 5657567657"
                className="font-urbanist font-medium"
              >
                +355 5657567657
              </a>
            </div>
          </div>
          <div className="flex lg:justify-center xl:items-center  mb-6 md:mb-0">
            <a href="https://maps.app.goo.gl/xTgAqwFFCUtiW1FZ7" target="_blank">
              <div className="hidden xl:flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Location />
              </div>
            </a>
            <div className="flex flex-col md:ml-5 lg:ml-10">
              <span className="text-[#18776A] font-urbanist font-bold">
                Adresa:
              </span>
              <a
                href="https://maps.app.goo.gl/xTgAqwFFCUtiW1FZ7"
                target="_blank"
                className="font-urbanist font-medium"
              >
                Tirana, Albania
              </a>
            </div>
          </div>
          <div className="flex lg:justify-center xl:items-center">
            <a href="mailto: construct.mail@gmail.com">
              <div className="hidden xl:flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Email className="w-10 h-10 bg-[#18776A]" />
              </div>
            </a>
            <div className="flex flex-col md:ml-5 lg:ml-10">
              <span className="text-[#18776A] font-urbanist font-bold">
                Email:
              </span>
              <a
                href="mailto: construct.mail@gmail.com"
                className="font-urbanist font-medium"
              >
                construction-mail@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#3D4047] py-10 text-white px-6">
          <div className="max-w-6xl mx-auto md:flex justify-between">
            <ul className="w-full md:w-1/3">
              <li>
                <h2 className="mb-3 md:mb-10 text-lg md:text-xl font-urbanist font-bold">
                  Construction
                </h2>
              </li>
              {routes.map((item) => {
                return (
                  <li
                    key={item.label}
                    className="border-b border-[#888889] text-[#888889] font-urbanist font-medium"
                  >
                    <Link href="/" className="flex -ml-[10px] py-1">
                      <ChevronRight /> {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="w-full md:w-1/3 md:mx-16">
              <li>
                <h2 className="mb-3 mt-6 md:mt-0 md:mb-10 text-lg md:text-xl font-urbanist font-bold">
                  Our Services
                </h2>
              </li>
              {services.map((item) => {
                return (
                  <li
                    key={item.label}
                    className="border-b border-[#888889] text-[#888889] font-urbanist font-medium"
                  >
                    <span className="flex -ml-[10px] py-1">
                      <Check /> {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <ul className="w-full md:w-1/3">
              <li>
                <h2 className="mb-3 mt-6 md:mt-0 md:mb-10 text-lg md:text-xl font-urbanist font-bold">
                  Contact
                </h2>
              </li>
              <li className="flex border-b border-[#888889] text-[#888889] font-urbanist font-medium">
                <Phone className="w-5 h-5 mr-2" />
                <div>
                  <a href="tel:+355 3245435345" className="">
                    +355 342453445
                  </a>
                  <span className="mx-2">/</span>
                  <a href="tel: 00355 5657567657">+355 1224325434</a>
                </div>
              </li>
              <li className="border-b border-[#888889] text-[#888889] font-urbanist font-medium">
                <a
                  href="mailto: construct.mail@gmail.com"
                  className="flex py-1"
                >
                  <Email className="w-5 h-5" />
                  <span className="ml-2">construct.mail@gmail.com</span>
                </a>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <ul className="flex items-center py-1">
                  <li className="inline-block mr-3 font-urbanist font-medium">
                    Follow Us:
                  </li>
                  <li className="inline-block">
                    <a href="https://www.instagram.com">
                      <Instagram />
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
