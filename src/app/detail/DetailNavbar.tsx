export default function DetailNavbar() {
  return (
    <nav className="w-[360px] h-[1900px] bg-[#FFFFFF] px-6">
      {/* Type */}

      <div className="w-[176px] h-[352px] pt-9">
        <p className="text-[#90A3BF] font-semibold text-[12px]">TYPE</p>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            Sport <span className="text-[#90A3BF]">(10)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            SUV <span className="text-[#90A3BF]">(12)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            MPV <span className="text-[#90A3BF]">(16)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            Sedan <span className="text-[#90A3BF]">(20)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            Coupe <span className="text-[#90A3BF]">(14)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            Hatchback <span className="text-[#90A3BF]">(14)</span>
          </p>
        </div>
      </div>

      {/* Capacity */}

      <div className="w-[176px] h-[240px]">
        <p className="text-[#90A3BF] font-semibold text-[12px]">CAPACITY</p>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            2 Person <span className="text-[#90A3BF]">(10)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            4 Person <span className="text-[#90A3BF]">(14)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            6 Person <span className="text-[#90A3BF]">(12)</span>
          </p>
        </div>
        <div className="flex gap-x-2 my-4">
          <input type="checkbox" />
          <p className="text-[20px] text-[#596780]">
            8 or More <span className="text-[#90A3BF]">(16)</span>
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="w-[296px] h-[104px]">
      <p className="text-[#90A3BF] font-semibold text-[12px]">PRICE</p>
      <div className="my-4">
        <img src="pricerange.png" alt="" />
      </div>
      <p className="text-[#596780] font-semibold text-[20px]">Max. $100.00</p>
      </div>
    </nav>
  );
}
