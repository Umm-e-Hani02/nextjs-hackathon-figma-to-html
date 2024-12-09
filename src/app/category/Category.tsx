import CatalogueCard from "../home/CatalogueCard";

export default function Category() {
  return (
    <div className="h-[800px] grid grid-cols-3 gap-5 mx-auto mt-5">
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

      <CatalogueCard
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
      <CatalogueCard
        carName="MG ZX Excite"
        category="Hatchback"
        like="carcard/RedLike.png"
        carImgSrc="carcard/mgzx.png"
        carImgAlt="MG ZX Excite"
        gasoline="90L"
        car="Manual"
        capacity="4 People"
        price="$74.00/"
      />
    </div>
  );
}
