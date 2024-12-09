import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import DetailNavbar from "./DetailNavbar";
import DetailHero from "./DetailHero";
import Reviews from "../detail/Reviews";
import CarCategory from "../detail/CarCategory";
export default function Category() {
  return (
    <section className="w-full max-w-screen h-[1600px] bg-[#F6F7F9] overflow-x-hidden">
      <TopBar heading="High Fidelity Dashboard - Category Car Rent" />
      <Navbar />
      <div className="flex">
        <DetailNavbar />
        <div className="flex flex-col">
          <DetailHero />
          <Reviews />
          <CarCategory />
        </div>
      </div>
    </section>
  );
}
