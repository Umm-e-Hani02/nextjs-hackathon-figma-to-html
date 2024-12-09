import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Rental() {
  return (
    <div className="w-[534px] h-[836px] bg-[#FFFFFF] px-5 rounded-lg">
      <h2 className="font-bold text-[#1A202C] text-xl py-5">Details Rental</h2>

      <div>
        <img src="Maps.png" alt="" />
        <div className="flex py-5">
          <img src="Look.png" alt="" />
          <div>
            <h2 className="text-[#1A202C] text-2xl font-bold">Nisan GT-R</h2>
            <span className="text-[#3D5278] pt-3">Sport Car</span>
          </div>
          <div className="ml-auto text-[#3D5278] text-sm">#9761</div>
        </div>
      </div>
      <div>
        <div className="flex pt-2">
          <input type="radio" name="select" />
          <label className="font-semibold ml-3">Pick-Up</label>
        </div>
        <div className="flex mt-4 m-auto justify-center items-center ">
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold">Locations</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="faisalabad">Faisalabad</SelectItem>
                <SelectItem value="quetta">Quetta</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
                <SelectItem value="multan">Multan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

          {/* Date */}
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold">Date</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                <SelectValue placeholder="Select your date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="january">January</SelectItem>
                <SelectItem value="february">February</SelectItem>
                <SelectItem value="march">March</SelectItem>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="june">June</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

          {/* Time */}
          <div className="w-1/3">
            <legend className="text-[#1A202C] font-semibold">Time</legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                <SelectValue placeholder="Select your time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9-12">9:00am-12:00pm</SelectItem>
                <SelectItem value="2-5">2:00pm-5:00pm</SelectItem>
                <SelectItem value="7-10">7:00pm-10:00pm</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Drop-Off</label>
          </div>
          <div className="flex mt-4 m-auto justify-center items-center">
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Date</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                  <SelectValue placeholder="Select your date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="june">June</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold">Time</legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none lg:-ml-3 -ml-7">
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-12">9:00am-12:00pm</SelectItem>
                  <SelectItem value="2-5">2:00pm-5:00pm</SelectItem>
                  <SelectItem value="7-10">7:00pm-10:00pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5 text-nowrap">
          <div className="flex flex-col">
            <h2 className="text-[#1A202C] text-2xl font-bold">
              Total Rental Price
            </h2>
            <p className="text-[#90A3BF]">
              Overall and includes rental discount
            </p>
          </div>
          <span className="text-[#1A202C] text-3xl font-bold">$80.00</span>
        </div>
      </div>
    </div>
  );
}
