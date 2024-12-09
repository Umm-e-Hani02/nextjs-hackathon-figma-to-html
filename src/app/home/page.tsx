import TopBar from "../../components/TopbarCard";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Catalogue from "./Catalogue";
export default function HomePage() {
  return (
    <section className="max-w-[1440px] h-[2350px] lg:bg-[#F6F7F9] bg-[#FFFFFF]">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Home Car Rent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="m-auto">
        <Hero />
      </div>

      {/* Catalogue */}
      <div className="m-auto">
        <Catalogue />
        <div className="w-[734px] h-11 flex items-center mt-16 m-auto">
        <button className="w-[156px] h-11 bg-[#3563E9] text-white rounded ml-72 hover:bg-[#3159d1]">
          Show More Car
        </button>
        <p className="text-[#90A3BF] ml-auto -pr-96">120 Car</p>
      </div>
      </div>

      
    </section>
  );
}
