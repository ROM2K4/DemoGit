/* eslint-disable react/jsx-key */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//props
//numberOfSlides: Định nghĩa số lượng slide
//numberOfSlides = 3 => carousel show 3 item cùng 1 lúc
//numberOfSlides = 1 => carousel show 1 item cùng 1 lúc

// eslint-disable-next-line react/prop-types
export default function Carousel({ numberOfSlides = 1, category = "Trending", autoplay = false }) {
  // numberOfSlides = 1, category = "Trending" là tham số đc gán value mặc định
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    //await: đợi response trả về
    const response = await axios.get(
      "https://66df1a7ede4426916ee393cf.mockapi.io/api/v1/Movie"
    );
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={numberOfSlides}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={autoplay ? [Navigation, Autoplay] : [Navigation]}
        className={`carousel ${numberOfSlides > 1 ? "multi-item" : ""}`}
        //[1] ? [2] : [3]  ===> 
        //[1] đúng => [2] chạy
        //[1] sai => [3] chạy
        //{``}: để sử dụng phép logic (dấu huyền)
      >
        {/* Cứ mỗi movie trong movies(list) sẽ thành 1 SwiperSlide */}
        {/* object => component */}
        {/* map */}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
