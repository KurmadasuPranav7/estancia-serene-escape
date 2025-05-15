
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    alt: "Scenic farm view with mountains",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
    alt: "Beautiful garden flowers",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    alt: "River between mountains",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80",
    alt: "Herd of sheep in field",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
    alt: "Ox on mountain",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?auto=format&fit=crop&q=80",
    alt: "Farm cottage exterior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&q=80",
    alt: "Farm breakfast spread",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1477239439998-839196943351?auto=format&fit=crop&q=80",
    alt: "Misty morning landscape",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80",
    alt: "Sunset over farm",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80",
    alt: "Star-filled night sky",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&q=80",
    alt: "Rustic cottage interior",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
    alt: "Cozy living room",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80",
    alt: "Farm fresh vegetables",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&q=80",
    alt: "Farm animals grazing",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1510598125064-a9c0c78a6213?auto=format&fit=crop&q=80",
    alt: "Peaceful lake view",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1461770354136-8f58567b617a?auto=format&fit=crop&q=80",
    alt: "Morning farm activities",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&q=80",
    alt: "Traditional local cuisine",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&q=80",
    alt: "Farm walkway",
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80",
    alt: "Hammock relaxation spot",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80",
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
