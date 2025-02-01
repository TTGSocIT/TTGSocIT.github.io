"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import EventCard from "@/app/(home)/components/EventCard";
import EventCard1 from "@/app/(home)/components/EventCard1";

const EventSection = () => {
  return (
    <div className="bg-black py-20 flex flex-col items-center justify-center gap-y-12">
      <div className="flex flex-col gap-y-3 text-center max-w-[1000px] px-5">
        <div className="font-bold text-3xl text-primary">
          Events at UNSW TTGSoc
        </div>
        <p className="text-white">(TODO UPDATE TEXT HERE)</p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop
        autoplay
        className="w-full px-5"
        breakpoints={{
          1300: {
            slidesPerView: 4,
          },
          930: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard1 name = "yo" image = "/hero.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSection;
