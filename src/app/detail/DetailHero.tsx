import { Star } from "lucide-react";
export default function DetailHero() {
  return (
    <div className="flex p-5 m-auto">
      <div className="w-[492px] h-508px flex flex-col">
        <img src="carcard/category.png" alt="" />
        <div className="flex gap-x-6 mt-5">
          <img src="carcard/View1.png" alt="" />
          <img src="carcard/View2.png" alt="" />
          <img src="carcard/View3.png" alt="" />
        </div>
      </div>


      <div className="w-[492px] h-508px rounded-lg bg-[#FFFFFF] p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-3xl">Nissan GT-R</h2>
            <div className="flex items-center text-yellow-400 gap-1 mt-1">
              <Star fill="#FACC15" />
              <Star fill="#FACC15" />
              <Star fill="#FACC15" />
              <Star fill="#FACC15" />
              <Star className="text-gray-300" />
              <span className="text-[#596780]">440+ Reviewer</span>
            </div>
          </div>
          <div className="">
            <img src="carcard/RedLike.png" alt="" />
          </div>
        </div>
        <p className="text-[#596780] leading-10 text-xl pt-6">
          NISMO has become the embodiment of Nissans outstanding performance
          inspires by the most unforgiving proving ground the "race track"
        </p>

        <div className="w-[444px] h-[72px] flex my-6 gap-x-5">
          <div className="w-[200px] h-[72px]">
            <p className="flex justify-between">
              <span className="text-xl text-[#90A3BF]">Type Car</span>
              <span className="text-xl text-[#596780] font-semibold text-end">
                Sport
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-xl text-[#90A3BF]">Steering</span>
              <span className="text-xl text-[#596780] font-semibold text-end">
                Manual
              </span>
            </p>
          </div>

          <div className="w-[200px] h-[72px] ">
            <p className="flex justify-between">
              <span className="text-xl text-[#90A3BF]">Capacity</span>
              <span className="text-xl text-[#596780] font-semibold text-end">
                2 Person
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-xl text-[#90A3BF]">Gasoline</span>
              <span className="text-xl text-[#596780] font-semibold text-end">
                70L
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12">
          <div>
            <p className="text-[#1A202C] text-2xl font-bold">
              $80.00/ <span className="text-[#90A3BF] text-sm">days</span>
            </p>
            <del className="text-[#90A3BF] text-sm">$100.00</del>
          </div>
          <div>
            <button className="bg-[#3563E9] text-white w-[160px] h-14 text-center rounded-md hover:bg-[#3159d1]">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
