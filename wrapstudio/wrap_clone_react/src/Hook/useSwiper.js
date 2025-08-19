import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

Swiper.use([Autoplay, Pagination]);

const useSwiper = (options) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;
    if (swiperRef.current) {
      swiperInstance = new Swiper(swiperRef.current, options);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [options]);

  return swiperRef;
};

export default useSwiper;
