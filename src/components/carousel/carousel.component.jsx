import { useState, useEffect } from 'react';

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import ReviewCard from '../review-card/review-card.component';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './carousel.styles.scss';

const Carousel = ({ reviews }) => {
  const [srcSize, setScrSize] = useState(window.innerWidth);

  const getReviewPerPage = width => {
    if (width >= 1050) return 3;
    if (width >= 670) return 2;
    return 1;
  };

  useEffect(() => {
    window.addEventListener('resize', () => setScrSize(window.innerWidth));
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={getReviewPerPage(srcSize)}
      loop={true}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      allowTouchMove={false}
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className='h-full'
    >
      {reviews.map(review => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
