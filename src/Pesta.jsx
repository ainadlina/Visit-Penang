import React from "react";

export default function Pesta() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Tapak Pesta Penang</h1>


      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/Pesta/img1.jpg"
          alt="Tapak Pesta Penang"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Tapak Pesta Penang, located in Sungai Nibong, is a vibrant fairground that comes alive during festive seasons. It features carnival rides, food stalls, games, and cultural performances, making it a must-visit for families and those seeking a festive atmosphere.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Sungai Nibong, Penang</li>
            <li>- Operating Hours: 5:00 PM - 12:00 AM</li>
            <li>- Entry Fee: Free / RMXX (depending on the event)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center my-6">Gallery</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="w-full md:w-[300px] h-[500px]">
          <img
            src="/Attraction/Pesta/img2.jpg"
            alt="Carnival Ride at Tapak Pesta"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center w-full md:w-[300px] h-[500px]">
          <video
            controls
            className="w-full h-full object-cover rounded-lg"  
            src="/Attraction/Pesta/video.MOV"  
            alt="Tapak Pesta Event Video"
          />
        </div>
        <div className="w-full md:w-[300px] h-[500px]">
          <img
            src="/Attraction/Pesta/img3.jpg"
            alt="Food Stalls at Tapak Pesta"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

     
      <div className="mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/Pesta/img4.JPG"
            alt="Carnival Ride at Tapak Pesta"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Pesta/img5.JPG"
            alt="Food Stalls at Tapak Pesta"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Pesta/img6.JPG"
            alt="Cultural Performance at Tapak Pesta"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
