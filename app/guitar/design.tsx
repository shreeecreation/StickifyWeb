import React, { useState } from "react";
import Image from "next/image";

type DesignGalleryProps = {
  images: string[];
};

export default function DesignGallery({ images }: DesignGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState("anime");

  // Open modal and set selected image index
  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTab === "anime" ? "bg-orange-400 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab("anime")}
          >
            Anime
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTab === "game" ? "bg-orange-400 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab("game")}
          >
            Game
          </button>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="cursor-pointer group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Image
                src={img}
                alt={`Design sample ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {modalOpen && selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl max-h-[90vh] w-full p-4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold z-60"
                aria-label="Close modal"
              >
                &times;
              </button>

              <Image
                src={images[selectedIndex]}
                alt={`Design sample ${selectedIndex + 1}`}
                width={600}
                height={600}
                className="object-contain rounded-xl"
                draggable={false}
                onClick={e => e.stopPropagation()} // prevent modal close on image click
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
