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
  Instagram,
  Phone,
  Location,
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
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-[url('/slider/1.jpg')] h-screen bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-1/2 -mt-[22px]">
                <h1 className="text-xl font-bold mb-8">Rreth Nesh</h1>
                <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />

                <p>
                  10 vite përkushtim në ndërtim dhe rinovim me standardet më të
                  larta të cilësisë
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/2.jpg')] h-screen bg-cover bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-1/2 -mt-[22px]">
                <h1 className="text-xl font-bold mb-8">Shërbimet Tona</h1>
                <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />

                <p>
                  Një gamë e gjerë shërbimesh ndërtimi dhe rinovimi për çdo
                  nevojë. Nga pllakat dhe parketet deri te instalimet dhe
                  fasadat moderne.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/3.jpg')] h-screen bg-cover bg-center bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-1/2 -mt-[22px]">
                <h1 className="text-xl font-bold mb-8">
                  Pse të na Zgjidhni Ne?
                </h1>
                <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />

                <p>
                  Kombinimi i inovacionit, përvojës dhe zgjidhjeve të
                  personalizuara për çdo klient.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/4.jpg')] h-screen bg-cover bg-center bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-1/2 -mt-[22px]">
                <h1 className="text-xl font-bold mb-8">Ekipi Ynë</h1>
                <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />

                <p>
                  Profesionalistë të kualifikuar që punojnë me pasion dhe
                  përkushtim maksimal
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/slider/5.jpg')] h-screen bg-cover bg-center bg-center">
              <div className="absolute bg-[#00000094] text-white max-w-[500px] p-8 left-40 top-1/2 -mt-[22px]">
                <h1 className="text-xl font-bold mb-8">Na Kontaktoni</h1>
                <hr className="border-t-2 border-[#18776A] w-[50px] mb-6" />

                <p>Ju sillni idetë, dhe ne i kthejmë në realitet!</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          id="about"
          className="bg-[url('/slider/3.jpg')] bg-cover bg-center bg-fixed"
        >
          <div className="bg-[#ffffffed] py-20 ">
            <div className="max-w-6xl mx-auto text-center ">
              <h2 className="text-xl font-bold mb-6">Rreth nesh</h2>
              <hr className="border-t-2 border-[#18776A] w-[50px] mx-auto mb-6" />
              <p className="mb-4">
                Prej më shumë se 10 vitesh, Basha Construction është sinonim i
                cilësisë dhe besueshmërisë në sektorin e ndërtimit.
              </p>
              <p className="mb-4">
                Ne ofrojmë një gamë të gjerë shërbimesh, si pllaka dhe parkete,
                fasada të standardeve më të larta, instalime hidraulike dhe
                elektrike, montim kamerash sigurie, punime gipsi, lyerje
                dekorative dhe ndërtimin e oborreve e trotuareve.
              </p>
              <p className="mb-4">
                Profesionalizmi ynë dhe përkushtimi ndaj detajeve na bën
                partnerin ideal për projekte të vogla dhe të mëdha.{" "}
              </p>
              <p className="mb-4">
                Klientët tanë na zgjedhin për cilësinë, korrektësinë dhe
                zgjidhjet e personalizuara që u përshtaten nevojave të tyre.
              </p>
              <p className="mb-4">
                <strong>Me Basha Construction, çdo ide bëhet realitet!</strong>
              </p>
            </div>
          </div>
        </div>
        <div id="projects" className="bg-[#18776A] text-[#ffffffed] py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-6">Projektet tona</h2>
            <hr className="border-t-2 border-[#ffffff] w-[50px] mx-auto mb-6" />
            <p className="mb-6 max-w-screen-md mx-auto">
              Çdo projekt që realizojmë është një shembull i përkushtimit dhe
              cilësisë që ofron Basha Construction. Nga zgjidhjet funksionale te
              detajet estetike, ne sigurohemi që të tejkalojmë pritshmëritë e
              klientëve tanë. Projektet tona janë ndërtuar për të qëndruar në
              kohë dhe për të reflektuar vizionin dhe kërkesat e çdo klienti.
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
            </LightGallery>
          </div>
        </div>
        <div className="flex justify-between py-20 max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <a href="tel: 00355 68 368 3636">
              <div className="flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Phone className="w-10 h-10 bg-[#18776A]" />
              </div>
            </a>
            <div className="flex flex-col ml-10">
              <span className="text-[#18776A]">Tel:</span>
              <a href="tel: 00355 68 368 3636">+355 68 368 3636</a>
              <a href="tel: 00355 68 587 9006">+355 68 587 9006</a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://maps.app.goo.gl/xTgAqwFFCUtiW1FZ7" target="_blank">
              <div className="flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Location />
              </div>
            </a>
            <div className="flex flex-col ml-10">
              <span className="text-[#18776A]">Adresa:</span>
              <a
                href="https://maps.app.goo.gl/xTgAqwFFCUtiW1FZ7"
                target="_blank"
              >
                Tirana, Albania
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a href="mailto: construct.basha@gmail.com">
              <div className="flex justify-center items-center rounded-full h-[90px] w-[90px] bg-[#18776A]">
                <Email className="w-10 h-10 bg-[#18776A]" />
              </div>
            </a>
            <div className="flex flex-col ml-10">
              <span className="text-[#18776A]">Email:</span>
              <a href="mailto: construct.basha@gmail.com">
                construct.basha@gmail.com
              </a>
            </div>
          </div>
        </div>
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
                <h2 className="mb-10">Shërbimet Tona</h2>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Fasada
                </span>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Pllaka & Parkete
                </span>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Instalime Elektrike & Hidraulike
                </span>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Punime Gipsi
                </span>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Oborre & Trotuare
                </span>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <span className="flex -ml-[10px] py-1">
                  <Check /> Montim Kamerash
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <h2 className="mb-10">Kontakt</h2>
              </li>
              <li className="flex border-b border-[#888889] text-[#888889]">
                <Phone className="w-5 h-5 mr-2" />
                <div>
                  <a href="tel:+355 68 368 3636" className="">
                    +355 68 368 3636
                  </a>
                  <span className="mx-2">/</span>
                  <a href="tel: 00355 68 587 9006">+355 68 587 9006</a>
                </div>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <a
                  href="mailto: construct.basha@gmail.com"
                  className="flex py-1"
                >
                  <Email className="w-5 h-5" />
                  <span className="ml-2">construct.basha@gmail.com</span>
                </a>
              </li>
              <li className="border-b border-[#888889] text-[#888889]">
                <ul className="flex items-center py-1">
                  <li className="inline-block mr-3">Na ndiqni:</li>
                  <li className="inline-block">
                    <a href="https://www.instagram.com/basha_construction/">
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
