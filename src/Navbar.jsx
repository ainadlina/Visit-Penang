import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";


export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };

    return(
        <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
            <div className="container mx-auto lg:px-3 w-full">
                <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-y-4">
                    <img src="/flag.png" alt="" className=" pl-4 w-20 h-20" />
                        <h2 className="text-primary font-bold text-3xl pl-2">PENANG 2025</h2>
                    </div>
                  </div>
                  <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                  <a href="#home" className="leading-normal no-underline text-primary text-lg hover:text-yellow-500 font-semibold">Home</a>
                    <a href="#tourism-spot" className="leading-normal no-underline text-primary text-lg hover:text-yellow-500 font-semibold">Tourist Spot</a>
                    <a href="#foodie" className="leading-normal no-underline text-primary text-lg hover:text-yellow-500 font-semibold">Foodie</a>
                    <a href="#hotels" className="leading-normal no-underline text-primary text-lg hover:text-yellow-500 font-semibold">Hotels</a>
                    <a href="#activities" className="leading-normal nounderline text-primary text-lg hover:text-yellow-500 font-semibold">Activities</a>
                  </ul>
                  {dropdown ? (
                    <div 
                      onClick={showDropdown}
                      className="lg:hidden text-[22px] cursor-pointer text-black"
                    >
                        <MdClose />
                    </div>
                  ) : (
                    <div 
                      onClick={showDropdown}
                      className="lg:hidden text-[22px] cursor-pointer text-black"
                    >
                        <HiMenuAlt3 />
                    </div>
                  )}
                </div>
                {dropdown && (
                    <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
                      <div className="w-full flex flex-col items-baseline gap-4">
                        <ul className="flex flex-coljustify-center w-full">
                        <a href="#home" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg hover:text-yellow-200 text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                          >
                            Home
                          </a>
                          <a href="#tourism-spot" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg hover:text-yellow-200 text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                          >
                            Tourist Spot
                          </a>
                          <a href="#foodie" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg hover:text-yellow-200 text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                          >
                            Foodie
                          </a>
                          <a href="#hotels" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg hover:text-yellow-200 text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                          >
                            Hotels
                          </a>
                          <a href="#activities" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-semibold text-lg hover:text-yellow-200 text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                          >
                            Activities
                          </a>
                        </ul>
                      </div>
                    </div>
                )}     
            </div>
      </nav>
   );
}