import React from "react";

export default function BatuFerringhi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Batu Ferringhi Beach</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/BatuFeringhi/img2.jpg"  // Updated image path
          alt="Batu Ferringhi Beach"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Batu Ferringhi Beach is one of the most popular beach destinations in Penang. Known for its golden sandy beaches and water sports activities, it is an ideal place to relax or enjoy various water adventures. Visitors can also explore vibrant night markets and enjoy seafood at local restaurants.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Batu Ferringhi, Penang</li>
            <li>- Operating Hours: Open 24 hours</li>
            <li>- Entry Fee: Free</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/BatuFeringhi/img1.jpg"  
            alt="Batu Ferringhi Beach Sunset"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/BatuFeringhi/img3.jpg"  
            alt="Water sports at Batu Ferringhi"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/BatuFeringhi/img4.jpg"  
            alt="Beachfront at Batu Ferringhi"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
