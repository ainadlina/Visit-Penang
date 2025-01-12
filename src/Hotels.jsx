import { HiLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

export default function Hotels() {
  const Card = ({ image, text, location, rating }) => {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden relative">
        <img src={image} alt={text} className="w-full h-[200px] object-cover" />
        <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4 flex items-center gap-1">
          <FaStar className="text-[#ffc103]" /> {rating}
        </p>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{text}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-500">
            <HiLocationMarker />
            <span>{location}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-3">
      <section id="hotels" className="pt-36">
        <div>
          <div className="lg:flex justify-between text-center">
            <span>
              <h2 className="text-4xl text-primary font-bold pl-6">
                Luxury Penang Hotel
              </h2>
              <p className="pl-10 py-4 italic">
                Penang&apos;s Hidden Gems: Stay in Style, Sleep in Comfort.
              </p>
            </span>
            <p className="text-light lg:w-2/5">
            Penang's hotels offer a perfect blend of luxury, comfort, and unique experiences, 
            ensuring visitors leave with lasting memories and a desire to return.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <Card
              image="/Hotel/Eastern&Oriental/img1.jpg"
              text="Eastern & Oriental Hotel"
              location="George Town, Penang"
              rating="4.5"
            />
            <Card
              image="/Hotel/GraniteLuxury/img1.jpg"
              text="Granite Luxury Hotel"
              location="Air Itam, Penang"
              rating="4.3"
            />
            <Card
              image="/Hotel/ParkRoyalHotel/img1.jpg"
              text="Park Royal Hotel"
              location="Batu Ferringhi, Penang"
              rating="4.5"
            />
            <Card
              image="/Hotel/bertam.jpg"
              text="Bertam Resort Penang"
              location="Kepala Batas, Penang"
              rating="4.3"
            />
            <Card
              image="/Hotel/Shangri.jpg"
              text="Shangri-La's Rasa Sayang Resort & Spa"
              location="Batu Ferringhi, Penang"
              rating="4.6"
            />
            <Card
              image="/Hotel/88.jpg"
              text="88 Armenian Hotel"
              location="George Town, Penang"
              rating="4.9"
            />
            <Card
              image="/Hotel/Orient.jpg"
              text="Grand Orient Hotel"
              location="Perai, Penang"
              rating="4.0"
            />
            <Card
              image="/Hotel/light.jpg"
              text="The Light Hotel (M)"
              location="Seberang Jaya, Penang"
              rating="4.4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
