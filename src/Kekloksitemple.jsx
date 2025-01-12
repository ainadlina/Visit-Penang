import React from "react";

export default function Kekloksitemple() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Kek Lok Si Temple</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/Temple/img1.jpg"
          alt="Kek Lok Si Temple"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            The Kek Lok Si Temple is one of the largest and most beautiful Buddhist temples in Southeast Asia. Located in Air Itam, Penang, it features stunning architecture, intricate carvings, and a towering statue of the Goddess of Mercy.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Air Itam, Penang</li>
            <li>- Operating Hours: 8:30 AM - 5:30 PM</li>
            <li>- Entry Fee: Free</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/Temple/img2.jpg"
            alt="Main Prayer Hall"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Temple/img3.jpg"
            alt="Pagoda"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Temple/img4.jpg"
            alt="Goddess of Mercy Statue"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
