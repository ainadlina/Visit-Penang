import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState("Popular Destination");
    return (
      
         <div className="container mx-auto px-8">
          <section id="home" className="pt-8">
             <div className=" relative rounded-2xl lg:pb-10 lg:h-[70vh]">
                 <div className="overflow-hidden relative h-full  w-full">
                    <div className="w-full lg:h-[40rem] h-80 rounded-2xl">
                        <video loop controls muted autoPlay className="w-full h-full object-cover rounded-3xl">
                            <source src="/video.mp4" type="video/mp4" />
                         </video>
                    </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 h-fit">
          <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
            Discover Penang: A Haven of Beauty and Culture
          </h1>
        </div>
        </div>
        </section>
      </div>
    

      
  );
}