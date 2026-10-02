import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Homeslider(){
    return(
        <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="my-20"
    >
            <SwiperSlide>
                <img src="https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg" className="w-full h-150 object-cover"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg" className="w-full h-150 object-cover"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg" className="w-full h-150 object-cover"/>
            </SwiperSlide>

        </Swiper>
    )
}
export default Homeslider;