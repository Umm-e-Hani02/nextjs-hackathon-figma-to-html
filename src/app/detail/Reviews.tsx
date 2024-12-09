import { Star, ChevronDown } from "lucide-react";

export default function Reviews() {
  return (
    <div className=" max-w-[1016px] w-[1016] h-[452px] bg-[#FFFFFF] p-5 rounded-lg shadow mx-5">
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <p className="text-xl font-semibold text-[#1A202C]">Reviews</p>
          <div className="bg-[#3563E9] w-11 h-7 text-white flex items-center justify-center rounded">
            13
          </div>
        </div>
        {/* First Review */}
        <div className="w-full max-w-[968px] mb-5 mt-5">
          <div className="flex items-center gap-5">
            {/* User Image */}
            <img
              src="Image.png"
              alt="Alex Stanton"
            />

            {/* User Details */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl text-[#1A202C]">Alex Stanton</h3>
              <span className="text-[#90A3BF]">CEO at Bukalapak</span>
            </div>

            {/* Date and Rating */}
            <div className="ml-auto flex flex-col items-end">
              <span className="text-[#90A3BF] text-sm">21 July 2024</span>
              <div className="flex items-center text-yellow-400 gap-1 mt-1">
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star className="text-gray-300" />
              </div>
            </div>
          </div>
          <p className="text-[#596780] text-sm mt-2">
            We are very happy with the service from the MORENT app Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.
          </p>
        </div>
        {/* Second Review */}
        <div className="w-full max-w-[968px] mt-5">
          <div className="flex items-center gap-5">
            {/* User Image */}
            <img
              src="Profile.png"
              alt="Skylar Dias"
            />

            {/* User Details */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl text-[#1A202C]">Skylar Dias</h3>
              <span className="text-[#90A3BF]">CEO at Amazon</span>
            </div>

            {/* Date and Rating */}
            <div className="ml-auto flex flex-col items-end">
              <span className="text-[#90A3BF] text-sm">20 July 2024</span>
              <div className="flex items-center text-yellow-400 gap-1 mt-1">
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star fill="#FACC15" />
                <Star className="text-gray-300" />
              </div>
            </div>
          </div>
          <p className="text-[#596780] text-sm mt-2">
            We are greatly helped by the services of the MORENT Application.
            Morent has low prices and also a wide variety of cars with good and
            comfortable facilities. In addition, the service provided by the
            officers is also very friendly and very polite.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10">
            <p className="text-[#90A3BF] flex">Show All <ChevronDown/></p>
        </div>
      </div>
    </div>
  );
}
