import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiShare2 } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import Title from "../../../utils/Title";

const MasterChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="my-8">

<Title title="Master Chefs"></Title>


      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {chefs.map((chef, index) => (
          <SwiperSlide key={index}>
            <article className="relative rounded-lg md:w-96 mx-auto md:h-[450px] shadow-lg">
              <img src={chef.image_url} className="rounded-t-2xl" alt="" />

              <div className="bg-white absolute w-full bottom-0">
                <div className="flex justify-between items-center px-6 py-2">
                  <div>
                    <p>{chef.name}</p>
                    <p> Lorem, ipsum.</p>
                  </div>

                  <FiShare2 className="text-2xl bg-green-600 text-white rounded-lg w-10 h-10 p-2"></FiShare2>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MasterChefs;
