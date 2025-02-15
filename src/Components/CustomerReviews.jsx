import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Sophia L.",
    review: "Absolutely loved the pasta! Authentic flavors, great ambiance.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Michael D.",
    review: "The best steak I've had in years. Will definitely return!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Emma W.",
    review: "Fresh ingredients and excellent service. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "James T.",
    review: "Desserts are to die for! The chocolate lava cake was amazing.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Olivia R.",
    review: "Great place for family dinners. Cozy atmosphere!",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 4.6,
  },
];

// Function to generate star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex justify-center mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-[#FFD700] text-lg">★</span>
      ))}
      {halfStar && <span className="text-[#FFD700] text-lg">★</span>}
    </div>
  );
};

export default function CustomerReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-[100%] bg-[#F4F4F4] py-12">
      <div className="max-w-6xl mx-auto px-6 py-10 bg-[#FF8C42] text-white rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-bold text-[#FFD700] mb-8">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-3">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform hover:scale-105">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-[#FF8C42]"
                />
                <h3 className="text-lg font-semibold mt-3 text-[#FF8C42]">
                  {review.name}
                </h3>
                <StarRating rating={review.rating} />
                <p className="text-gray-700 text-sm mt-2 italic">"{review.review}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
