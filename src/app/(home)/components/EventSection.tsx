"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import EventCard from "@/app/(home)/components/EventCard";

const EventSection = () => {
  return (
    <div className="bg-black py-20 flex flex-col items-center justify-center gap-y-12">
      <div className="flex flex-col gap-y-3 text-center max-w-[1000px] px-5">
        <div className="font-bold text-3xl text-primary">
          Events at anime@UTS!
        </div>
        <p className="text-white">
          We feature a wide variety of events from Anime Trivias, Arcade tours,
          Gaming Events, Karaoke, Chill sessions, Movie outings, Dinners, anime
          screenings, charity events, food events, beach visits, camp, parties
          and so much more! All of our internal events are free to members! We
          are always thinking about new fresh event ideas to bring our members
          more fun and experiences they haven't had before.
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop
        autoplay
        className="w-full"
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
