"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import EventCard from "@/app/(home)/components/EventCard";
import EventCard1 from "@/app/(home)/components/EventCard1";

const EventSection = () => {
  return (
    <div
      className="relative py-20 flex flex-col items-center justify-center gap-y-12 bg-cover bg-center"
      style={{ backgroundImage: `url('/home_events.webp')` }}
    >
      <div className="absolute bg-black/70 dark:bg-black/40 w-full h-full"></div>

      <div className="flex flex-col gap-y-3 text-center max-w-[1000px] px-5 z-20">
        <div className="font-bold text-4xl text-titleColorBg">
          Events at UNSW TTGSoc
        </div>
        <p className="text-white"></p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
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
          <EventCard1
            name="Weekly Boardgames"
            image="/Friday_Boardgames.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard1 name="RPG campaigns" image="/lost_lands_dnd.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard1 name="AnimeSoc Collab" image="/maid_cafe.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard1 name="Weekly Trading card games" image="/Magic.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard1 name="Uniqe and new RPG's" image="/dnd thing.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSection;
