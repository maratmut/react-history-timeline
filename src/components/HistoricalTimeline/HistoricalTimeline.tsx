import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import EventsSlider from './EventsSlider';
import { TimelinePeriod } from '../../data/timelineData';
import './HistoricalTimeline.scss';

interface HistoricalTimelineProps {
  periods: TimelinePeriod[];
}

const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({ periods }) => {
  const [activePeriod, setActivePeriod] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const prevActivePeriod = useRef<number>(activePeriod);
  const circleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentYearRef = useRef<HTMLSpanElement>(null);
  const nextYearRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const totalPeriods = periods.length;
  const segmentAngle = 360 / totalPeriods;

  useEffect(() => {
    if (prevActivePeriod.current === activePeriod) {
      return;
    }

    setIsRotating(true);

    const [currentYear, nextYear] = periods[activePeriod].years.split('-');
    const [prevCurrentYear, prevNextYear] = periods[prevActivePeriod.current].years.split('-');

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsRotating(false);
      }
    });

    if (circleRef.current) {
      const targetRotation = -(segmentAngle * activePeriod);

      timeline.to(circleRef.current, {
        rotation: targetRotation,
        duration: 0.7,
        ease: "power2.inOut",
        transformOrigin: "center center"
      });
    }

    if (currentYearRef.current && nextYearRef.current) {
      timeline.add(() => {
        gsap.fromTo([currentYearRef.current, nextYearRef.current],
          {
            textContent: (i: number) => i === 0 ? prevCurrentYear : prevNextYear,
            opacity: 1,
          },
          {
            textContent: (i: number) => i === 0 ? currentYear : nextYear,
            duration: 1,
            ease: "power1.easeIn",
            snap: { textContent: 1 },
            stagger: 0.2,
          }
        );
      }, "-=0.5");
    }

    if (titleRef.current) {
      timeline.fromTo(
        titleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        "+=0.3"
      );
    }

    if (sliderRef.current) {
      timeline.fromTo(
        sliderRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "<"
      );
    }

    prevActivePeriod.current = activePeriod;
  }, [activePeriod, totalPeriods, segmentAngle, periods]);

  const handlePeriodClick = (index: number) => {
    if (index !== activePeriod) {
      setActivePeriod(index);
    }
  };

  const handleNavClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActivePeriod(prev => (prev > 0 ? prev - 1 : periods.length - 1));
    } else {
      setActivePeriod(prev => (prev < periods.length - 1 ? prev + 1 : 0));
    }
  };

  const [currentYear, nextYear] = periods[activePeriod].years.split('-');

  return (
    <div className="historical-timeline">
      <div className="vertical-line-left"></div>
      <div className="vertical-line-right"></div>
      <h1 className="timeline-title">
        <span>Исторические</span>
        <span>даты</span>
      </h1>

      <div className="timeline-content">
        <div className="timeline-circle">
          <div className="horizontal-line"></div>
          <div className="vertical-center-line"></div>

          <div className="years-display">
            <span className="year current" ref={currentYearRef}>{currentYear}</span>
            <span className="year next" ref={nextYearRef}>{nextYear}</span>
          </div>

          <div className="circle-container">
            <div
              className="rotating-circle"
              ref={circleRef}
              style={{
                transformOrigin: "center center"
              }}
            >
              {periods.map((period, index) => {
                const angle = -segmentAngle * index + 45;
                const radian = (angle * Math.PI) / 180;
                const radius = 265;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                  <div
                    key={period.id}
                    className={`period-point ${index === activePeriod ? 'active' : ''}`}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% - ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: isRotating ? 'none' : 'auto'
                    }}
                    onClick={() => handlePeriodClick(index)}
                  >
                    <div className="point">
                      <span
                        className="hover-number"
                        style={{
                          transform: `rotate(${segmentAngle * activePeriod}deg)`
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>
                );
              })}


              {periods.map((period, index) => (
                <div
                  key={`fixed-${period.id}`}
                  className={`fixed-point ${index === activePeriod ? 'active' : ''}`}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${265 * Math.cos((-segmentAngle * index + 45) * Math.PI / 180)}px)`,
                    top: `calc(50% - ${265 * Math.sin((-segmentAngle * index + 45) * Math.PI / 180)}px)`,
                    transform: 'translate(-50%, -50%)',
                    opacity: index === activePeriod ? 1 : 0,
                    pointerEvents: 'none'
                  }}
                >
                  <div className="point active-point">
                    <span style={{
                      transform: `rotate(${segmentAngle * activePeriod}deg)`
                    }}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>


            <div
              className="period-title-container"
              ref={titleRef}
              style={{
                position: 'absolute',
                left: `calc(50% + ${265 * Math.cos(45 * Math.PI / 180)}px + 56px)`,
                top: `calc(50% - ${265 * Math.sin(45 * Math.PI / 180)}px)`,
                transform: 'translate(0, -50%)',
                whiteSpace: 'nowrap',
                opacity: 0,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div
                className="period-title"
                style={{
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#42567A',
                  fontWeight: 700,

                }}
              >
                {periods[activePeriod].title}
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-counter">
          <span className="counter-current">0{activePeriod + 1}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">0{periods.length}</span>
        </div>

        <div className="timeline-navigation">
          <button
            className="nav-button prev"
            onClick={() => handleNavClick('prev')}
            disabled={activePeriod === 0}
            aria-label="Previous period"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <button
            className="nav-button next"
            onClick={() => handleNavClick('next')}
            disabled={activePeriod === periods.length - 1}
            aria-label="Next period"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="events-slider" ref={sliderRef}>
        <EventsSlider events={periods[activePeriod].events} />
      </div>
    </div>
  );
};

export default HistoricalTimeline;