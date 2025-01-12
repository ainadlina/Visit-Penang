import React from "react";

export default function PenangHill() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Penang Hill</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/PenangHill/img1.jpg"  
          alt="Penang Hill"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Penang Hill, also known as Bukit Bendera, is one of the most popular tourist destinations in Penang. It offers breathtaking views of George Town and the surrounding areas. Visitors can enjoy a relaxing environment, historical sites, and scenic trails.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Bukit Bendera, Penang</li>
            <li>- Operating Hours: 6:30 AM - 11:00 PM</li>
            <li>- Entry Fee:</li>
            <li>  Children: RM15(Two-way ticket), RM8(One-way Ticket)</li>
            <li> Adult: 30(Two-way ticket), RM16(One-way Ticket)</li>
            <li> Senior Citizen: RM30(Two-way ticket), RM8(One-way Ticket)</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/PenangHill/img3.jpg"  
            alt="View from Penang Hill"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/PenangHill/img2.jpg"  
            alt="Train to Penang Hill"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/PenangHill/img4.jpg"  
            alt="Penang Hill Observation Deck"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
