import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import { API_URL } from "../config";

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data.reviews);
      })
      .catch((error) => console.error(error));
  },[]);

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          What Clients Say
        </h2>

        {reviews.length === 0 ? (
          <p className="text-gray-400 mt-12 text-center">
            No reviews yet.
          </p>
          ) : (
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                      }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mt-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-slate-800 p-8 rounded-2xl h-full">
                  <div className="text-yellow-400 text-xl mb-4">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    "{review.message}"
                  </p>

                  <h4 className="mt-6 text-yellow-400 font-bold">
                    — {review.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    
        )}

      </div>
    </section>
  );
}

export default Testimonials;