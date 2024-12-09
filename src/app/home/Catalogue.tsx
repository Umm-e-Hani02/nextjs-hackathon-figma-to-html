import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CatalogueCard from "./CatalogueCard";
import ResponsiveCatalogueCard from "./ResponsiveCatalogueCard";

export default function Catalogue() {
  return (
    <>
      {/* Popular Cars */}
      <div className="h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 px-10 hidden">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Popular Car</h3>
          <h3 className="text-[#3563E9] p-5">View All</h3>
        </div>
        <div className="h-[388px] grid grid-cols-4 gap-x-10">
          <div>
            <CatalogueCard
              carName="Koenigsegg"
              category="Sport"
              like="carcard/RedLike.png"
              carImgSrc="carcard/koenigsegg.png"
              carImgAlt="Koenigsegg"
              gasoline="90L"
              car="Manual"
              capacity="2 People"
              price="$99.00/"
            />
          </div>

          <div>
            <CatalogueCard
              carName="Nissan GT-R"
              category="Sport"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/nissangt-r.png"
              carImgAlt="Nissan GT-R"
              gasoline="80L"
              car="Manual"
              capacity="2 People"
              price="$80.00/"
              actualPrice="$100.00"
            />
          </div>

          <div>
            <CatalogueCard
              carName="Rolls - Royce"
              category="Sedan"
              like="carcard/RedLike.png"
              carImgSrc="carcard/rolls-royce.png"
              carImgAlt="Rolls - Royce"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$96.00/"
            />
          </div>

          <div>
            <CatalogueCard
              carName="Nissan GT-R"
              category="Sport"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/nissangt-r.png"
              carImgAlt="Nissan GT-R"
              gasoline="80L"
              car="Manual"
              capacity="2 People"
              price="$80.00/"
              actualPrice="$100.00"
            />
          </div>
        </div>
      </div>

      {/* Carousel for Mobile */}
      {/* <div className="lg:hidden flex justify-center m-auto w-[400px] bg-[#F6F7F9]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
        >
          <CarouselContent className="">
            <CarouselItem>
              <CatalogueCard
                carName="Nissan GT-R"
                category="Sport"
                like="carcard/GrayLike.png"
                carImgSrc="carcard/nissangt-r.png"
                carImgAlt="Nissan GT-R"
                gasoline="80L"
                car="Manual"
                capacity="2 People"
                price="$80.00/"
                actualPrice="$100.00"
              />
            </CarouselItem>
            <CarouselItem>
              <CatalogueCard
                carName="Rolls - Royce"
                category="Sedan"
                like="carcard/RedLike.png"
                carImgSrc="carcard/rolls-royce.png"
                carImgAlt="Rolls - Royce"
                gasoline="70L"
                car="Manual"
                capacity="4 People"
                price="$96.00/"
              />
            </CarouselItem>
            <CarouselItem>
              <CatalogueCard
                carName="Rolls - Royce"
                category="Sedan"
                like="carcard/RedLike.png"
                carImgSrc="carcard/rolls-royce.png"
                carImgAlt="Rolls - Royce"
                gasoline="70L"
                car="Manual"
                capacity="4 People"
                price="$96.00/"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div> */}

      {/* Carousel for Mobile */}
      <div className="lg:hidden flex flex-col items-center m-auto w-full bg-[#F6F7F9] py-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[90%] max-w-[400px]"
        >
          <CarouselContent>
            <CarouselItem>
              <CatalogueCard
                carName="Nissan GT-R"
                category="Sport"
                like="carcard/GrayLike.png"
                carImgSrc="carcard/nissangt-r.png"
                carImgAlt="Nissan GT-R"
                gasoline="80L"
                car="Manual"
                capacity="2 People"
                price="$80.00/"
                actualPrice="$100.00"
              />
            </CarouselItem>
            <CarouselItem>
              <CatalogueCard
                carName="Rolls - Royce"
                category="Sedan"
                like="carcard/RedLike.png"
                carImgSrc="carcard/rolls-royce.png"
                carImgAlt="Rolls - Royce"
                gasoline="70L"
                car="Manual"
                capacity="4 People"
                price="$96.00/"
              />
            </CarouselItem>
            <CarouselItem>
              <CatalogueCard
                carName="Rolls - Royce"
                category="Sedan"
                like="carcard/RedLike.png"
                carImgSrc="carcard/rolls-royce.png"
                carImgAlt="Rolls - Royce"
                gasoline="70L"
                car="Manual"
                capacity="4 People"
                price="$96.00/"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="absolute right-0 transform translate-x-[-10px] top-[50%] translate-y-[-50%]" />
          <CarouselPrevious className="absolute left-0 transform translate-x-[10px] top-[50%] translate-y-[-50%]" />
        </Carousel>
      </div>

      {/* Recommended Cars */}
      <div className="h-[1280px] md:h-[872px] flex flex-col bg-[#F6F7F9] mt-9 px-10">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recommended Car</h3>
        </div>
        <div className="h-[388px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 hidden md:grid">
          <div>
            <CatalogueCard
              carName="All New Rush"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/allnewrush.png"
              carImgAlt="All New Rush"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$72.00/"
              actualPrice="$80.00"
            />
          </div>
          <div>
            <CatalogueCard
              carName="CR - V"
              category="SUV"
              like="carcard/RedLike.png"
              carImgSrc="carcard/crv.png"
              carImgAlt="CR - V"
              gasoline="60L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="All New Terios"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/terios.png"
              carImgAlt="All New Terios"
              gasoline="90L"
              car="Manual"
              capacity="6 People"
              price="$74.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="CR - V"
              category="SUV"
              like="carcard/RedLike.png"
              carImgSrc="carcard/crv.png"
              carImgAlt="CR - V"
              gasoline="60L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
        </div>

        <div className="h-[388px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 hidden md:grid mt-12">
          <div>
            <CatalogueCard
              carName="MG ZX Exclusive"
              category="Hatchbook"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Exclusive"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$76.00/"
              actualPrice="$80.00"
            />
          </div>
          <div>
            <CatalogueCard
              carName="New MGZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MGZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="MG ZX Excite"
              category="Hatchbook"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Excite"
              gasoline="90L"
              car="Manual"
              capacity="4 People"
              price="$74.00/"
            />
          </div>
          <div>
            <CatalogueCard
              carName="New MGZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MGZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
          </div>
          
        </div>

        {/* Responsive Catalogue Cards for Mobile */}
        <div className="h-[1380px] md:hidden">
          <div className="grid grid-cols-1 gap-y-5">
            <ResponsiveCatalogueCard
              carName="All New Rush"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/allnewrush.png"
              carImgAlt="All New Rush"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$72.00/"
              actualPrice="$80.00"
            />
            <ResponsiveCatalogueCard
              carName="CR - V"
              category="SUV"
              like="carcard/RedLike.png"
              carImgSrc="carcard/crv.png"
              carImgAlt="CR - V"
              gasoline="60L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
            <ResponsiveCatalogueCard
              carName="All New Terios"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/terios.png"
              carImgAlt="All New Terios"
              gasoline="90L"
              car="Manual"
              capacity="6 People"
              price="$74.00/"
            />
            <ResponsiveCatalogueCard
              carName="New MG ZS"
              category="SUV"
              like="carcard/GrayLike.png"
              carImgSrc="carcard/mgzs.png"
              carImgAlt="New MG ZS"
              gasoline="80L"
              car="Manual"
              capacity="6 People"
              price="$80.00/"
            />
            <ResponsiveCatalogueCard
              carName="MG ZX Exclusive"
              category="Hatchback"
              like="carcard/RedLike.png"
              carImgSrc="carcard/mgzx.png"
              carImgAlt="MG ZX Exclusive"
              gasoline="70L"
              car="Manual"
              capacity="4 People"
              price="$76.00/"
              actualPrice="$80.00"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import CatalogueCard from "./CatalogueCard";
// import ResponsiveCatalogueCard from "./ResponsiveCatalogueCard";
// export default function Catalogue() {
//   return (
//     <>
//       {/* Popular Cars */}
//       <div className="h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 px-10 hidden ">
//         <div className="flex justify-between">
//           <h3 className="text-[#90A3BF] p-5">Popular Car</h3>
//           <h3 className="text-[#3563E9] p-5">View All</h3>
//         </div>
//         <div className="h-[388px] grid grid-cols-4 gap-x-10">
//           <div className="">
//             <CatalogueCard
//               carName="Koenigsegg"
//               category="Sport"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/koenigsegg.png"
//               carImgAlt="Koenigsegg"
//               gasoline="90L"
//               car="Manual"
//               capacity="2 People"
//               price="$99.00/"
//             />
//           </div>

//           <div className="">
//             <CatalogueCard
//               carName="Nissan GT-R"
//               category="Sport"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/nissangt-r.png"
//               carImgAlt="Nissan GT-R"
//               gasoline="80L"
//               car="Manual"
//               capacity="2 People"
//               price="$80.00/"
//               actualPrice="$100.00"
//             />
//           </div>

//           <div className="">
//             <CatalogueCard
//               carName="Rolls - Royce"
//               category="Sedan"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/rolls-royce.png"
//               carImgAlt="Rolls - Royce"
//               gasoline="70L"
//               car="Manual"
//               capacity="4 People"
//               price="$96.00/"
//             />
//           </div>

//           <div className="">
//             <CatalogueCard
//               carName="Nissan GT-R"
//               category="Sport"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/nissangt-r.png"
//               carImgAlt="Nissan GT-R"
//               gasoline="80L"
//               car="Manual"
//               capacity="2 People"
//               price="$80.00/"
//               actualPrice="$100.00"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Responsive */}

//       <div className="lg:hidden flex justify-center m-auto w-[400px] bg-[#F6F7F9] ">
//         <div>
//           {/* <Carousel > */}
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
//           >
//             <Carousel>
//               <CarouselContent>
//                 <CarouselItem className="basis-1/3">
//                   <CatalogueCard
//                     carName="Nissan GT-R"
//                     category="Sport"
//                     like="carcard/GrayLike.png"
//                     carImgSrc="carcard/nissangt-r.png"
//                     carImgAlt="Nissan GT-R"
//                     gasoline="80L"
//                     car="Manual"
//                     capacity="2 People"
//                     price="$80.00/"
//                     actualPrice="$100.00"
//                   />
//                 </CarouselItem>
//                 <CarouselItem className="basis-1/3">
//                   <CatalogueCard
//                     carName="Rolls - Royce"
//                     category="Sedan"
//                     like="carcard/RedLike.png"
//                     carImgSrc="carcard/rolls-royce.png"
//                     carImgAlt="Rolls - Royce"
//                     gasoline="70L"
//                     car="Manual"
//                     capacity="4 People"
//                     price="$96.00/"
//                   />
//                 </CarouselItem>
//                 <CarouselItem className="basis-1/3">
//                   <CatalogueCard
//                     carName="Rolls - Royce"
//                     category="Sedan"
//                     like="carcard/RedLike.png"
//                     carImgSrc="carcard/rolls-royce.png"
//                     carImgAlt="Rolls - Royce"
//                     gasoline="70L"
//                     car="Manual"
//                     capacity="4 People"
//                     price="$96.00/"
//                   />
//                 </CarouselItem>
//               </CarouselContent>
//             </Carousel>
//           </Carousel>
//         </div>
//       </div>

//       {/* Recommended Cars */}

//       <div className="h-[1280px] md:h-[872px] flex flex-col bg-[#F6F7F9] mt-9 px-10">
//         <div className="flex justify-between">
//           <h3 className="text-[#90A3BF] p-5">Recommended Car</h3>
//         </div>
//         <div className="h-[388px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 hidden md:grid">
//           <div className="">
//             <CatalogueCard
//               carName="All New Rush"
//               category="SUV"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/allnewrush.png"
//               carImgAlt="All New Rush"
//               gasoline="80L"
//               car="Manual"
//               capacity="6 People"
//               price="$72.00/"
//               actualPrice="$80.00"
//             />
//           </div>
//           <div className="">
//             <CatalogueCard
//               carName="CR - V"
//               category="SUV"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/crv.png"
//               carImgAlt="CR - V"
//               gasoline="60L"
//               car="Manual"
//               capacity="6 People"
//               price="$80.00/"
//             />
//           </div>
//           <div className="">
//             <CatalogueCard
//               carName="All New Terios"
//               category="SUV"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/terios.png"
//               carImgAlt="All New terios"
//               gasoline="90L"
//               car="Manual"
//               capacity="6 People"
//               price="$74.00/"
//             />
//           </div>

//           <div className="">
//             <CatalogueCard
//               carName="CR - V"
//               category="SUV"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/crv.png"
//               carImgAlt="CR - V"
//               gasoline="60L"
//               car="Manual"
//               capacity="6 People"
//               price="$80.00/"
//             />
//           </div>
//         </div>

//         <div className="h-[388px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 hidden md:grid">
//           <div className="">
//             <CatalogueCard
//               carName="MG ZX Exclusive"
//               category="Hatchback"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/mgzx.png"
//               carImgAlt="MG ZX Exclusive"
//               gasoline="70L"
//               car="Manual"
//               capacity="4 People"
//               price="$76.00/"
//               actualPrice="$80.00"
//             />
//           </div>
//           <div className="">
//             <CatalogueCard
//               carName="New MG ZS"
//               category="SUV"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/mgzs.png"
//               carImgAlt="New MG ZS"
//               gasoline="80L"
//               car="Manual"
//               capacity="6 People"
//               price="$80.00/"
//             />
//           </div>
//           <div className="">
//             <CatalogueCard
//               carName="MG ZX Excite"
//               category="Hatchback"
//               like="carcard/RedLike.png"
//               carImgSrc="carcard/mgzx.png"
//               carImgAlt="MG ZX Excite"
//               gasoline="90L"
//               car="Manual"
//               capacity="4 People"
//               price="$74.00/"
//             />
//           </div>
//           <div className="">
//             <CatalogueCard
//               carName="New MG ZS"
//               category="SUV"
//               like="carcard/GrayLike.png"
//               carImgSrc="carcard/mgzs.png"
//               carImgAlt="New MG ZS"
//               gasoline="80L"
//               car="Manual"
//               capacity="6 People"
//               price="$80.00/"
//             />
//           </div>
//         </div>

//         {/* Responsive */}

//         <div className="h-[1380px] md:hidden">
//           <div className="grid grid-cols-1 gap-y-5">
//             <div>
//               <ResponsiveCatalogueCard
//                 carName="All New Rush"
//                 category="SUV"
//                 like="carcard/GrayLike.png"
//                 carImgSrc="carcard/allnewrush.png"
//                 carImgAlt="All New Rush"
//                 gasoline="80L"
//                 car="Manual"
//                 capacity="6 People"
//                 price="$72.00/"
//                 actualPrice="$80.00"
//               />
//             </div>
//             <div className="">
//               <ResponsiveCatalogueCard
//                 carName="CR - V"
//                 category="SUV"
//                 like="carcard/RedLike.png"
//                 carImgSrc="carcard/crv.png"
//                 carImgAlt="CR - V"
//                 gasoline="60L"
//                 car="Manual"
//                 capacity="6 People"
//                 price="$80.00/"
//               />
//             </div>
//             <div className="">
//               <ResponsiveCatalogueCard
//                 carName="All New Terios"
//                 category="SUV"
//                 like="carcard/GrayLike.png"
//                 carImgSrc="carcard/terios.png"
//                 carImgAlt="All New terios"
//                 gasoline="90L"
//                 car="Manual"
//                 capacity="6 People"
//                 price="$74.00/"
//               />
//               <div className="">
//                 <ResponsiveCatalogueCard
//                   carName="New MG ZS"
//                   category="SUV"
//                   like="carcard/GrayLike.png"
//                   carImgSrc="carcard/mgzs.png"
//                   carImgAlt="New MG ZS"
//                   gasoline="80L"
//                   car="Manual"
//                   capacity="6 People"
//                   price="$80.00/"
//                 />
//               </div>
//               <div className="">
//                 <ResponsiveCatalogueCard
//                   carName="MG ZX Exclusive"
//                   category="Hatchback"
//                   like="carcard/RedLike.png"
//                   carImgSrc="carcard/mgzx.png"
//                   carImgAlt="MG ZX Exclusive"
//                   gasoline="70L"
//                   car="Manual"
//                   capacity="4 People"
//                   price="$76.00/"
//                   actualPrice="$80.00"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

{
  /* <CarouselContent className="ml-5">
              <CarouselItem>
                <div className="">
                  <CatalogueCard
                    carName="Nissan GT-R"
                    category="Sport"
                    like="carcard/GrayLike.png"
                    carImgSrc="carcard/nissangt-r.png"
                    carImgAlt="Nissan GT-R"
                    gasoline="80L"
                    car="Manual"
                    capacity="2 People"
                    price="$80.00/"
                    actualPrice="$100.00"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <CatalogueCard
                    carName="Rolls - Royce"
                    category="Sedan"
                    like="carcard/RedLike.png"
                    carImgSrc="carcard/rolls-royce.png"
                    carImgAlt="Rolls - Royce"
                    gasoline="70L"
                    car="Manual"
                    capacity="4 People"
                    price="$96.00/"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <CatalogueCard
                    carName="Rolls - Royce"
                    category="Sedan"
                    like="carcard/RedLike.png"
                    carImgSrc="carcard/rolls-royce.png"
                    carImgAlt="Rolls - Royce"
                    gasoline="70L"
                    car="Manual"
                    capacity="4 People"
                    price="$96.00/"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext /> */
}
