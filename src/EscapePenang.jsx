
import React from "react";

export default function EscapePenang() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">ESCAPE Penang</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/Escape/img1.jpg"
          alt="ESCAPE Penang"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            ESCAPE Penang is a world-renowned adventure theme park located in Tanjung Bungah, Penang. It offers thrilling outdoor activities such as zip-lining, water slides, and climbing challenges. Perfect for families and adventure enthusiasts!
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Tanjung Bungah, Penang</li>
            <li>- Operating Hours: 10:00 AM - 6:00 PM</li>
            <li>- Entry Fee: </li>
            <li>- Kids(0-3): Free</li>
            <li>- Junior Kid(4-12): RM86-RM122</li>
            <li>- Adult: RM129-RM184</li>
            <li>- Senior Citizen: Free*</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/Escape/img2.jpg"
            alt="Adventure Park"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Escape/img3.jpg"
            alt="Water Slide"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Escape/img4.jpg"
            alt="Climbing Wall"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
