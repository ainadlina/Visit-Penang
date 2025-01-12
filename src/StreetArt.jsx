import React from "react";

export default function StreetArt() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Penang Street Art</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/StreetArt/img1.jpg"  // Updated image path
          alt="Penang Street Art"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Penang Street Art is a famous art scene in George Town, Penang, where vibrant murals are scattered across the streets. The street art showcases local culture, history, and creativity, offering a unique and interactive experience for visitors. 
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: George Town, Penang</li>
            <li>- Operating Hours: Open 24 hours</li>
            <li>- Entry Fee: Free</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/StreetArt/img2.jpg"  // Updated image path
            alt="Penang Street Art Mural 1"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/StreetArt/img3.jpg"  // Updated image path
            alt="Penang Street Art Mural 2"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/StreetArt/img4.jpg"  // Updated image path
            alt="Penang Street Art Mural 3"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
