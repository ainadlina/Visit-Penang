import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Popular() {
  const Card = ({ image, text, location, link }) => {
    return (
      <Link to={link}>
        <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer">
          <img src={image} alt={text} className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{text}</h3>
            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <HiLocationMarker />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="container mx-auto px-3">
      <section id="tourism-spot" className="pt-8"> 
        <div>
          <div className="lg:flex justify-between text-center">
            <span>
              <h2 className="text-4xl text-primary font-bold pl-6">Top Attraction in Penang</h2>
              <p className="py-4">Let&apos;s enjoy this heaven on earth</p>
            </span>
            <p className="text-light lg:w-2/5">
              Many places are very famous, beautiful, clean, and will give a very deep impression to visitors and make them come back.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-2 relative z-10">
            
            <Card
              image="/Attraction/Escape/img1.jpg"
              text="ESCAPE Penang"
              location="Tanjung Bungah, Penang"
              link="/EscapePenang"
            />
            <Card
              image="/Attraction/PenangHill/img1.jpg"
              text="Penang Hill"
              location="Bukit Bendera, Penang"
              link="/PenangHill"
            />
            <Card
              image="/Attraction/Temple/img1.jpg"
              text="Kek Lok Si Temple"
              location="Air Itam, Penang"
              link="/Kekloksitemple"
            />
            <Card
              image="/Attraction/Pesta/img1.jpg"
              text="Tapak Pesta Penang"
              location="Sungai Nibong, Penang"
              link="/Pesta"
            />
            <Card
              image="/Attraction/Bridge/img1.jpg"
              text="Penang Bridge"
              location="Penang Bridge, Penang"
              link="/Bridge"
            />
            <Card
              image="/Attraction/BatuFeringhi/img2.jpg"
              text="Batu Ferringhi Beach"
              location="Batu Ferringhi, Penang"
              link="/BatuFerringhi"
            />
            <Card
              image="/Attraction/Entopia/img1.jpg"
              text="Entopia by Penang Butterfly Farm"
              location="Tanjung Bungah, Penang"
              link="/Entopia"
            />
            <Card
              image="/Attraction/StreetArt/img1.jpg"
              text="Penang Street Art"
              location="George Town, Penang"
              link="/StreetArt"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
