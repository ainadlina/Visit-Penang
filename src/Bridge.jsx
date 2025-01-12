import React from "react";

export default function Bridge() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Penang Bridge</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/Bridge/img1.jpg"
          alt="Penang Bridge"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Penang Bridge, one of Malaysia's iconic landmarks, is a 13.5 km dual carriageway bridge connecting Penang Island and the mainland. It is the longest bridge in Southeast Asia and offers stunning views, especially during sunrise and sunset.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Location: Penang Island - Seberang Perai</li>
            <li>- Total Length: 13.5 km</li>
            <li>- Opened: September 1985</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/Bridge/img2.jpg"
            alt="Penang Bridge at night"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Bridge/img4.jpg"
            alt="Aerial view of Penang Bridge"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Bridge/img3.jpeg"
            alt="Sunrise view at Penang Bridge"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
