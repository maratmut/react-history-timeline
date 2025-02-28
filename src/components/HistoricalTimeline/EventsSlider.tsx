import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './EventsSlider.scss';

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface EventsSliderProps {
  events: Event[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const swiperRef = useRef<SwiperType | undefined>(undefined);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <div className="events-slider-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80
          }
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="event-card">
              <div className="event-date">{event.date}</div>
              <p className="event-description">{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-navigation">
        {!isBeginning && (
          <button
            className="nav-button prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#3877EE"/>
            </svg>
          </button>
        )}
        {!isEnd && (
          <button
            className="nav-button next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#3877EE"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventsSlider;