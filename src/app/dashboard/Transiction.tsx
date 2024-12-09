// export default function Transaction() {
//   return (
//     <div className="w-[524px] h-[324px] bg-[#FFFFFF] rounded-lg shadow-md p-8 flex flex-col">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-[#1A202C] font-bold text-lg">Top 5 Car Rental</h2>
//         <span className="text-[#90A3BF] font-bold text-lg">•••</span>
//       </div>

//       {/* Main Content */}
//       <div className="flex items-center justify-between">
//         {/* Chart and Stats */}
//         <div className="relative w-[160px] h-[160px] flex items-center justify-center">
//           {/* Chart Image */}
//           <img src="Chart1.png" alt="Chart" className="w-full h-full" />
//           {/* Chart Overlay Text */}
//           <div className="absolute flex flex-col items-center">
//             <span className="text-[#1A202C] font-bold text-3xl">72,030</span>
//             <span className="text-[#90A3BF] text-sm">Rental Car</span>
//           </div>
//         </div>

//         {/* Car Details */}
//         <div className="space-y-3 space-x-5">
//           <div className="flex justify-between">
//             <span className="text-[#90A3BF] text-sm">Sport Car</span>
//             <span className="text-[#1A202C] text-sm font-semibold">17,439</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-[#90A3BF] text-sm">SUV</span>
//             <span className="text-[#1A202C] text-sm font-semibold">9,478</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-[#90A3BF] text-sm">Coupe</span>
//             <span className="text-[#1A202C] text-sm font-semibold">18,197</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-[#90A3BF] text-sm">Hatchback</span>
//             <span className="text-[#1A202C] text-sm font-semibold">12,510</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-[#90A3BF] text-sm">MPV</span>
//             <span className="text-[#1A202C] text-sm font-semibold">14,406</span>
//           </div>
//         </div>
//       </div>

//       <div className="w-[524px] h-[480] bg-[#FFFFFF] rounded-lg"></div>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-[#1A202C] font-bold text-lg">Recent Transaction</h2>
//         <span className="text-[#3563E9] font-bold h-[12px]">View All</span>
//       </div>
//       <div className="w-[476px] h-[376px]">
//         <div className="flex">
//           <img className="h-[70px]" src="carcard/nissangt-r.png" alt="" />
//           <div className="flex justify-between">
//             <div>
//               <h2 className="text-[#1A202C]">Nissan GT-R</h2>
//               <span className="text-[#90A3BF]">Sport Car</span>
//             </div>
//             <div>
//                 <span className="text-[#90A3BF]">20 July</span>
//                 <span className="text-[#1A202C]">$80.00</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <img className="h-[70px]" src="carcard/koenigsegg.png" alt="" />
//           <div className="flex justify-between">
//             <div>
//               <h2 className="text-[#1A202C]">Koegnigsegg</h2>
//               <span className="text-[#90A3BF]">Sport Car</span>
//             </div>
//             <div>
//                 <span className="text-[#90A3BF]">19 July</span>
//                 <span className="text-[#1A202C]">$99.00</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <img className="h-[70px]" src="carcard/rolls-royce.png" alt="" />
//           <div className="flex justify-between">
//             <div>
//               <h2 className="text-[#1A202C]">Rolls-Royce</h2>
//               <span className="text-[#90A3BF]">Sport Car</span>
//             </div>
//             <div>
//                 <span className="text-[#90A3BF]">18 July</span>
//                 <span className="text-[#1A202C]">$96.00</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <img className="h-[70px]" src="carcard/crv.png" alt="" />
//           <div className="flex justify-between">
//             <div>
//               <h2 className="text-[#1A202C]">CR-V</h2>
//               <span className="text-[#90A3BF]">SUV</span>
//             </div>
//             <div>
//                 <span className="text-[#90A3BF]">17 July</span>
//                 <span className="text-[#1A202C]">$80.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Transaction() {
    return (
      <div className="bg-[#F9FAFB] min-h-screen flex flex-col items-center py-10">
        {/* Top 5 Car Rental */}
        <div className="w-[524px] bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1A202C] font-bold text-lg">Top 5 Car Rental</h2>
            <span className="text-[#90A3BF] font-bold text-lg">•••</span>
          </div>
  
          {/* Chart and Details */}
          <div className="flex items-center justify-between">
            {/* Chart */}
            <div className="relative w-[160px] h-[160px] flex items-center justify-center">
              <img src="Chart1.png" alt="Chart" className="w-full h-full" />
              <div className="absolute flex flex-col items-center">
                <span className="text-[#1A202C] font-bold text-3xl">72,030</span>
                <span className="text-[#90A3BF] text-sm">Rental Car</span>
              </div>
            </div>
  
            {/* Car Stats */}
            <div className="space-y-3">
              {[
                { name: "Sport Car", value: "17,439" },
                { name: "SUV", value: "9,478" },
                { name: "Coupe", value: "18,197" },
                { name: "Hatchback", value: "12,510" },
                { name: "MPV", value: "14,406" },
              ].map((item, index) => (
                <div className="flex justify-between text-sm" key={index}>
                  <span className="text-[#90A3BF]">{item.name}</span>
                  <span className="text-[#1A202C] font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Recent Transactions */}
        <div className="w-[524px] bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#1A202C] font-bold text-lg">Recent Transaction</h2>
            <span className="text-[#3563E9] font-bold text-sm cursor-pointer">
              View All
            </span>
          </div>
  
          {/* Transactions List */}
          <div className="space-y-4">
            {[
              {
                image: "carcard/nissangt-r.png",
                name: "Nissan GT-R",
                type: "Sport Car",
                date: "20 July",
                price: "$80.00",
              },
              {
                image: "carcard/koenigsegg.png",
                name: "Koenigsegg",
                type: "Sport Car",
                date: "19 July",
                price: "$99.00",
              },
              {
                image: "carcard/rolls-royce.png",
                name: "Rolls-Royce",
                type: "Sport Car",
                date: "18 July",
                price: "$96.00",
              },
              {
                image: "carcard/crv.png",
                name: "CR-V",
                type: "SUV",
                date: "17 July",
                price: "$80.00",
              },
            ].map((item, index) => (
              <div className="flex items-center" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className=""
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="text-[#1A202C] font-semibold">{item.name}</h3>
                    <span className="text-[#90A3BF] text-sm">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[#90A3BF] text-sm">
                      {item.date}
                    </span>
                    <span className="text-[#1A202C] font-bold">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  