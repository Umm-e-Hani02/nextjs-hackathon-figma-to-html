import TopBar from "@/components/TopbarCard";
import Navbar from "@/components/Navbar";
import DashboardNavbar from "./DashboardNavbar";
import Rental from "./Rental";
import Transaction from "./Transiction";

export default function Dashboard() {
  return (
    <section className="w-full h-[900px] bg-[#F6F7F9] overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Admin Car Rent" />

      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* SideNavbar */}
        <DashboardNavbar />

        {/* Rental details */}
        <Rental />

        {/*  */}

        <Transaction/>
      </div>
    </section>
  );
}
