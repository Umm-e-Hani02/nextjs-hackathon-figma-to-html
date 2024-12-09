import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <section className="w-full bg-[#F6F7F9] overflow-x-hidden">
      {/* Main Content */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <nav className="w-[286px] h-[900px] bg-[#FFFFFF]">
          <div className="w-[220px] mx-auto py-10">
            {/* Main Menu */}
            <div className="mb-8">
              <p className="text-[#94A7CB] text-[12px] mb-4">MAIN MENU</p>
              <div className="flex flex-col gap-4">
                {[
                  { href: "/dashboard", src: "home.png", label: "Dashboard" },
                  { href: "", src: "car.png", label: "Car Rent" },
                  { href: "", src: "chart.png", label: "Insight" },
                  { href: "", src: "reimburse.png", label: "Reimburse" },
                  { href: "", src: "message.png", label: "Inbox" },
                  { href: "", src: "calendar.png", label: "Calendar" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-2 p-2 rounded-xl ${
                      item.label === "Dashboard"
                        ? "bg-[#3563E9] text-white"
                        : "text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                    }`}
                  >
                    <img src={item.src} alt={item.label} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div>
              <p className="text-[#94A7CB] text-[12px] mb-4">PREFERENCES</p>
              <div className="flex flex-col gap-4">
                {[
                  { href: "/settings", src: "setting.png", label: "Settings" },
                  {
                    href: "/help-center",
                    src: "info-circle.png",
                    label: "Help & Center",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      aria-label={item.label}
                    />
                    {item.label}
                  </Link>
                ))}

                {/* Dark Mode Toggle */}
                <div className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white">
                  <img
                    src="briefcase.png"
                    alt="Dark Mode"
                    aria-label="Dark Mode"
                  />
                  Dark Mode
                  <img
                    className="ml-auto"
                    src="darklight-mode.png"
                    alt="Toggle Dark Mode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-10">
            <Link
              href="/logout"
              className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6"
            >
              <img src="logout.png" alt="Log Out" aria-label="Log Out" />
              Log Out
            </Link>
          </div>
        </nav>
      </div>
      <div className="">
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"}>
              <Menu className="size-6 text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-[286px] min-h-screen overflow-y-auto"
          >
            <div className="w-[220px] mx-auto py-10">
              {/* Main Menu */}
              <div className="mb-8">
                <p className="text-[#94A7CB] text-[12px] mb-4">MAIN MENU</p>
                <div className="flex flex-col gap-4">
                  {[
                    { href: "/dashboard", src: "home.png", label: "Dashboard" },
                    { href: "", src: "car.png", label: "Car Rent" },
                    { href: "", src: "chart.png", label: "Insight" },
                    { href: "", src: "reimburse.png", label: "Reimburse" },
                    { href: "", src: "message.png", label: "Inbox" },
                    { href: "", src: "calendar.png", label: "Calendar" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-2 p-2 rounded-xl ${
                        item.label === "Dashboard"
                          ? "bg-[#3563E9] text-white"
                          : "text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                      }`}
                    >
                      <img src={item.src} alt={item.label} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div>
                <p className="text-[#94A7CB] text-[12px] mb-4">PREFERENCES</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      href: "/settings",
                      src: "setting.png",
                      label: "Settings",
                    },
                    {
                      href: "/help-center",
                      src: "info-circle.png",
                      label: "Help & Center",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                    >
                      <img
                        src={item.src}
                        alt={item.label}
                        aria-label={item.label}
                      />
                      {item.label}
                    </Link>
                  ))}

                  {/* Dark Mode Toggle */}
                  <div className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white">
                    <img
                      src="briefcase.png"
                      alt="Dark Mode"
                      aria-label="Dark Mode"
                    />
                    Dark Mode
                    <img
                      className="ml-auto"
                      src="darklight-mode.png"
                      alt="Toggle Dark Mode"
                    />
                  </div>
                  <div className="mt-10 md:-ml-6">
                    <Link
                      href="/logout"
                      className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6"
                    >
                      <img
                        src="logout.png"
                        alt="Log Out"
                        aria-label="Log Out"
                      />
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
