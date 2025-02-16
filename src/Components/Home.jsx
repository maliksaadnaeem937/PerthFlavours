

import CustomerReviews from "./CustomerReviews";
import GiftVouchers from "./GiftVouches";
import Welcome from "./Welcome";
import CustomGoogleMap from "./CustomGoogleMap";
import TaglineSection from "./TagLine";
import OwnerSection from "./Owner";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";
import HomeData from "./HomeData";
export default function Home() {
  return (
    <main className="">
      <Welcome></Welcome>

   {/* <div className="bg-[url('/public/images/home-first.jpeg')] h-[90vh] flex justify-center items-center">
   
   </div> */}
   
   <TaglineSection></TaglineSection>
   <OwnerSection></OwnerSection>
   <HomeData></HomeData>
   <FAQSection></FAQSection>
   
   <CustomerReviews></CustomerReviews>
   <GiftVouchers></GiftVouchers>
   <CustomGoogleMap></CustomGoogleMap>



    </main>

  );
}
