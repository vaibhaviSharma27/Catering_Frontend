import Nav from "../components/Nav";
import Top from "../components/Top";
import { useState } from "react";
import { X } from "lucide-react";
import Footer from "../components/Footer";


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      category: "private",
      image: "src/images/slide1.png",
    },
    {
      id: 2,
      category: "Mehendi Function",
      image: "src/images/slide2.png",
    },
    {
      id: 3,
      category: "wedding",
      image: "src/images/slide3.png",
    },
    {
      id: 4,
      category: "Haldi Function",
      image: "src/images/slide4.png",
    },
    {
      id: 5,
      category: "wedding",
      image: "src/images/slide5.png",
    },
    {
      id: 6,
      category: "corporate",
      image: "src/images/slide6.png",
    },
    {
      id: 7,
      category: "Mehendi Function",
      image: "src/images/slide7.png",
    },
    {
      id: 8,
      category: " Haldi Function",
      image: "src/images/slide8.png",
    },
    {
      id: 9,
      category: "wedding",
      image: "src/images/slide9.png",
    },
    {
      id: 10,
      category: "wedding",
      image: "src/images/slide10.png",
    },
     {
      id:11,
      category: "wedding",
      image: "src/images/slide11.png",
    },
    {
      id: 12,
      category: "wedding",
      image: "src/images/slide12.png",
    },
    {
      id: 13,
      category: "private",
      image: "src/images/slide13.png",
    },
    {
      id: 14,
      category: "wedding",
      image: "src/images/slide14.png",
    },
    {
      id: 15,
      category: "private",
      image: "src/images/slide15.png",
    },
    {
      id: 16,
      category: "wedding",
      image: "src/images/slide16.png",
    },
    {
      id: 17,
      category: "Haldi Function",
      image: "src/images/slide17.png",
    },
    {
      id: 18,
      category: "Haldi Function",
      image: "src/images/slide18.png",
    },
    {
      id: 19,
      category: "wedding",
      image: "src/images/slide19.png",
    },
    {
      id: 20,
      category: "private",
      image: "src/images/slide20.png",
    },
    {
      id: 21,
      category: "corporate",
      image: "src/images/slide21.png",
    },
    {
      id: 22,
      category: "wedding",
      image: "src/images/slide22.png",
    },
     {
      id: 23,
      category: "corporate",
      image: "src/images/slide23.png",
    },
    {
      id: 24,
      category: "wedding",
      image: "src/images/slide24.png",
    },
    {
      id: 25,
      category: "wedding",
      image: "src/images/slide25.png",
    },
    {
      id: 26,
      category: "Haldi Function",
      image: "src/images/slide26.png",
    },
    {
      id: 27,
      category: "Haldi Function",
      image: "src/images/slide27.png",
    },
    {
      id: 28,
      category: "Mehendi Function",
      image: "src/images/slide28.png",
    },
    {
      id: 29,
      category: "Mehendi Function",
      image: "src/images/slide29.png",
    },
    {
      id: 30,
      category: "Haldi Function",
      image: "src/images/slide30.png",
    },
    {
      id: 31,
      category: "Haldi Function",
      image: "src/images/slide31.png",
    },
    {
      id: 32,
      category: "private",
      image: "src/images/slide32.png",
    },
    {
      id: 33,
      category: "Haldi Function",
      image: "src/images/slide33.png",
    },
    {
      id: 34,
      category: "Haldi Function",
      image: "src/images/slide34.png",
    },
    {
      id: 35,
      category: "Haldi Function",
      image: "src/images/slide35.png",
    },
      
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>

    <Top/>
    
    <section className="bg-black bg-cover bg-no-repeat min-h-screen py-20 px-8">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex flex-col justify-center items-center">
        <p className="text-amber-500 tracking-[4px] uppercase text-[50px] font-[Prata] font-bold">
          <span className="text-white">Our</span> Gallery
        </p>

        <div className="h-[2px] w-[400px] bg-amber-400"></div>
        </div>

        <h1 className="text-2xl text-white mt-3 font-[Prata]">
          A glimpse of our delicious creations and memorable events.
        </h1>

        <div className="h-[2px] w-28 bg-amber-500 mx-auto mt-5"></div>
      </div>

      {/* Categories */}

      <div className="flex flex-wrap justify-center gap-4 mb-12 text-[20px]">
        {[
          "all",
          "wedding",
          "Haldi Function",
          "Mehendi Function",
          "corporate",
          "private",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border border-amber-500 transition duration-300 capitalize
            ${
              activeCategory === category
                ? "bg-amber-500 text-black"
                : "text-white hover:bg-amber-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
            className="overflow-hidden rounded-xl cursor-pointer border border-amber-500 group"
          >
            <img
              src={item.image}
              alt=""
              className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}

      </div>

      {/* Modal */}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-center items-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white"
            >
              <X size={35} />
            </button>

            <img
              src={selectedImage}
              alt=""
              className="max-w-[90vw] max-h-[85vh] rounded-xl border-2 border-amber-500"
            />
          </div>
        </div>
      )}
    </section>

    <Footer/>
    </>
  );
}