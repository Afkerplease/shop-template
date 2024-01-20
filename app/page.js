import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import OurCategories from "@/components/OurCategories";
import Link from "next/link";
function HomePage() {
  return (
    <div>
      <Carousel />
      <OurCategories />
      <Footer />
    </div>
  );
}

export default HomePage;
