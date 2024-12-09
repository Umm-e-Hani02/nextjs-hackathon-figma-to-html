import TopBar from "@/components/TopbarCard"
import Navbar from "@/components/Navbar"
import DetailNavbar from "../detail/DetailNavbar"
import CategoryHero from "./CategoryHero"
import Category from "./Category"
export default function Detail(){
    return(
        <section className="w-full max-w-screen h-[1600px] bg-[#F6F7F9] overflow-x-hidden">
            <TopBar 
            heading="High Fidelity Dashboard - Detail Car Rent"/>
            <Navbar/>

            <div className="flex ">
            <DetailNavbar/>
            {/* <CategoryHero/> */}
            <Category/>
            </div>
        </section>
    )
}