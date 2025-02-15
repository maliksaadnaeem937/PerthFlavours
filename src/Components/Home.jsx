

import CustomerReviews from "./CustomerReviews";
import GiftVouchers from "./GiftVouches";
import Welcome from "./Welcome";
import CustomGoogleMap from "./CustomGoogleMap";
export default function Home() {
  return (
    <main className="">
      <Welcome></Welcome>

   {/* <div className="bg-[url('/public/images/home-first.jpeg')] h-[90vh] flex justify-center items-center">
   
   </div> */}
   <CustomerReviews></CustomerReviews>
   <GiftVouchers></GiftVouchers>
   <CustomGoogleMap></CustomGoogleMap>


    </main>

  );
}
