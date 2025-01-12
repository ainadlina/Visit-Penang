import React from "react";

export default function Entopia() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Entopia by Penang Butterfly Farm</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/Attraction/Entopia/img1.jpg"  // Corrected image path for Entopia
          alt="Entopia by Penang Butterfly Farm"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div>
          <p className="text-gray-700">
            Entopia by Penang Butterfly Farm is an enchanting and immersive experience located in Tanjung Bungah, Penang. The attraction features thousands of butterflies in a lush tropical environment. Visitors can explore the various butterfly species, enjoy educational exhibits, and engage with nature in a vibrant setting.
          </p>
          <ul className="mt-4 text-gray-600">
            <li>- Address: Tanjung Bungah, Penang</li>
            <li>- Operating Hours: 9:00 AM - 6:00 PM</li>
            <li>- Entry Fee: </li>
            <li>- Adult: RM65.00</li>
            <li>- Children: RM45.00</li>
            <li>- Senior: RM45.00</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/Attraction/Entopia/img2.jpg"  
            alt="Entopia Butterfly Exhibit"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Entopia/img3.jpg"  
            alt="Butterfly in Entopia"
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <img
            src="/Attraction/Entopia/img4.jpg"  
            alt="Lush tropical environment in Entopia"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
