
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import pes1 from "../assets/pes1.jpg";
import pes2 from "../assets/pes2.jpg";
import pes3 from "../assets/pes3.jpg";
import pes4 from "../assets/pes4.jpg";
import pes5 from "../assets/pes5.jpg";
import pes6 from "../assets/pes6.jpg";
import pes7 from "../assets/pes7.jpg";
import pes8 from "../assets/pes8.jpg";
import pes9 from "../assets/pes9.jpg";
import pes10 from "../assets/pes10.jpg";
import pes11 from "../assets/pes11.jpg";
import pes12 from "../assets/pes12.jpg";
import pes13 from "../assets/pes13.jpg";
import pes14 from "../assets/pes14.jpg";
import pes15 from "../assets/pes15.jpg";
import pes16 from "../assets/pes16.jpg";
import pes17 from "../assets/pes17.jpg";
import pes18 from "../assets/pes18.jpg";
import pes19 from "../assets/pes19.jpg";
import pes20 from "../assets/pes20.jpg";



const galleryImages = [
  {
    id: 1,
    src:  pes1,
    alt: "Scenic farm view with mountains",
  },
  {
    id: 2,
    src: pes2,
    alt: "Beautiful garden flowers",
  },
  {
    id: 3,
    src: pes3,
    alt: "River between mountains",
  },
  {
    id: 4,
    src: pes4,
    alt: "Herd of sheep in field",
  },
  {
    id: 5,
    src: pes5,
    alt: "Ox on mountain",
  },
  {
    id: 6,
    src: pes6,
    alt: "Farm cottage exterior",
  },
  {
    id: 7,
    src:pes7,
    alt: "Farm breakfast spread",
  },
  {
    id: 8,
    src:pes8,
    alt: "Misty morning landscape",
  },
  {
    id: 9,
    src: pes9,
    alt: "Sunset over farm",
  },
  {
    id: 10,
    src:pes10,
    alt: "Star-filled night sky",
  },
  {
    id: 11,
    src: pes11,
    alt: "Rustic cottage interior",
  },
  {
    id: 12,
    src: pes12,
    alt: "Cozy living room",
  },
  {
    id: 13,
    src: pes13,
    alt: "Farm fresh vegetables",
  },
  {
    id: 14,
    src: pes14,
    alt: "Farm animals grazing",
  },
  {
    id: 15,
    src:pes15,
    alt: "Peaceful lake view",
  },
  {
    id: 16,
    src: pes16,
    alt: "Morning farm activities",
  },
  {
    id: 17,
    src: pes17,
    alt: "Traditional local cuisine",
  },
  {
    id: 18,
    src: pes18,
    alt: "Farm walkway",
  },
  {
    id: 19,
    src:pes19,
    alt: "Hammock relaxation spot",
  },
  {
    id: 20,
    src: pes20,
    alt: "Sunset through trees",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <>
      <div className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore the beauty of Poojitha's Estancia through our collection of images
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedImage && (
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[calc(80vh-8rem)] object-contain rounded-md"
              />
              <p className="mt-4 text-center text-muted-foreground">{selectedImage.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
