import CatalogueCard from "../home/CatalogueCard";

export default function CarCategory() {
  return (
    <>
      {/* Popular Cars */}
      <div className="h-[452px] lg:flex flex-col bg-[#F6F7F9] mt-9 px-10 hidden">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recent Car</h3>
          <h3 className="text-[#3563E9] p-5">View All</h3>
        </div>
        <div className="h-[388px] grid grid-cols-4 gap-x-80">
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

        </div>
      </div>

      {/* Recommended Cars */}
      <div className="h-[1280px] md:h-[872px] flex flex-col bg-[#F6F7F9] mt-9 px-10">
        <div className="flex justify-between">
          <h3 className="text-[#90A3BF] p-5">Recommended Car</h3>
        </div>
        <div className="h-[388px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-80 hidden md:grid">
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
        </div>
      </div>
    </>
  );
}
