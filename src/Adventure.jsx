import { FaArrowLeft, FaArrowRight, FaPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function Adventure() {
    const images = [
        { city: "Penang Adventure Kayak Crew (PAKC)", image: "/Activities/kayak.jpg", location: "Bagan Ajam, Penang" },
        { city: "ATV Extrem Park Pantai Esen", image: "/Activities/atv.jpg", location: "Pantai Esen, Penang" },
        { city: "Haunted Abandoned Crag Hotel", image: "/Activities/hantu.jpg", location: "Penang Hill, Penang" },
        { city: "Penang National Park", image: "/Activities/nationalpark.jpg", location: "Penang National Park, Penang" },
        { city: "Project Rock", image: "/Activities/rock.jpg", location: "IKEA Batu Kawan, Penang" },
        { city: "Skywalk The Top Penang", image: "/Activities/skywalk.jpg", location: "The Top Penang, Penang" },
        { city: "Air Itam Dam", image: "/Activities/airitamdam.jpg", location: "Jalan Balik Pulau, Penang" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(5); 
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(1); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 
        return () => window.removeEventListener("resize", handleResize); 
    }, []);

    const Card = ({ image, city, location }) => {
        return (
            <div className="flex flex-col items-center gap-2 border border-dashed border-t-0 w-52 p-4 relative hover:shadow-lg transition-shadow">
                <div className="overflow-hidden relative rounded-lg">
                    <img
                        src={image}
                        alt={city}
                        className="w-full h-[200px] hover:scale-110 transition-transform duration-300 rounded-lg"
                    />
                </div>
                <p className="text-lg font-semibold">{city}</p>
               
                <div className="flex items-center gap-2">
                    <HiLocationMarker size={20} className="text-primary" />
                    <p className="text-gray text-light">{location}</p>
                </div>
            </div>
        );
    };

    const handleNext = () => {
        if (currentIndex + itemsPerPage >= images.length) {
            setCurrentIndex(0); 
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - itemsPerPage); 
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div id="activities" className="container mx-auto pt-36">
            
            <section>
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl text-primary font-bold pb-4">
                        Things To Do in Penang
                    </h2>
                    <p className="text-gray-600 italic">Trek the Hills, Stroll the Beaches - Penang Awaits Your Adventure</p>
                </div>

                
                <div className="flex justify-center items-center gap-8 pt-8 mx-auto">
                    {images.slice(currentIndex, currentIndex + itemsPerPage).map((card, index) => (
                        <Card key={index} city={card.city} image={card.image} location={card.location} />
                    ))}
                </div>

                
                <div className="flex justify-center py-10 gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`rounded-full w-12 h-12 shadow-md flex justify-center items-center bg-white border border-gray-300 hover:bg-primary hover:text-white transition-colors ${
                            currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        aria-label="Previous"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex + itemsPerPage >= images.length}
                        className={`rounded-full w-12 h-12 shadow-md flex justify-center items-center bg-white border border-gray-300 hover:bg-primary hover:text-white transition-colors ${
                            currentIndex + itemsPerPage >= images.length
                                ? "cursor-not-allowed opacity-50"
                                : ""
                        }`}
                        aria-label="Next"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
}
