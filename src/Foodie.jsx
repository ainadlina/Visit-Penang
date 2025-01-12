import { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function Foodie() {
    const Card = ({ image, text, location }) => {
        return (
            <div>
                <div className="overflow-hidden relative my-0 mx-auto rounded-t-2xl">
                    <img
                        src={image}
                        alt=""
                        className="rounded-2xl w-[150px] h-[300px] box-border hoverImg"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <h5 className="text-xl pt-2 font-semibold">{text}</h5>
                        <div className="flex items-center gap-2 ">
                            <HiLocationMarker size={20} className="text-primary" />
                            <p className="text-gray text-light">{location}</p>
                        </div>
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div>
            <section id="foodie" className="pt-36">
                <div className="container mx-auto px-3">
                    <div className="flex flex-col justify-center items-center text-center">
                        <span className="flex flex-col items-center text-center gap-2">
                            <h2 className="text-4xl text-primary font-bold">Penang's Food Paradise</h2>
                            <p className="py-4 italic">Taste Penang: Where Every Bite Tells a Story</p>
                        </span>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 y-16">
                        <Card
                            image="/Food/woodfire.jpg"
                            text="Woodfire Penang"
                            location="George Town, Pulau Pinang"
                        />
                        <Card
                            image="/Food/icecream.jpg"
                            text="Urban Artisan Desserts Cafe"
                            location="George Town, Pulau Pinang"
                        />
                        <Card
                            image="/Food/swadiCha.jpg"
                            text="Swadicha"
                            location="Batu Ferringhi, Pulau Pinang"
                        />
                        <Card
                            image="/Food/nasikandar.jpg"
                            text="Nasi Kandar Kampung Melayu"
                            location="Ayer Itam, Pulau Pinang"
                        />
                        <Card
                            image="/Food/cendol.jpg"
                            text="Durian Haven"
                            location="George Town, Pulau Pinang"
                        />
                        <Card
                            image="/Food/awetmuda.JPG"
                            text="Nasi Campur Awet Muda"
                            location="Gelugor, Pulau Pinang"
                        />
                        <Card
                            image="/Food/kopitiam7pagi.jpg"
                            text="Kopitiam 7 Pagi"
                            location="George Town, Pulau Pinang"
                        />
                        <Card
                            image="/Food/ekonomitomyam.JPG"
                            text="Ekonomi Tomyam"
                            location="Gelugor, Pulau Pinang"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
