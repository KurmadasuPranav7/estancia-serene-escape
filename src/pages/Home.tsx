
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, className }) => (
  <Card className={cn("feature-card", className)}>
    <CardHeader className="pb-2">
      <div className="mb-2 rounded-full bg-estancia-100 w-12 h-12 flex items-center justify-center text-estancia-700">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Home = () => {
  useEffect(() => {
    // Scroll to features if hash is present
    if (window.location.hash === "#features") {
      const featuresElement = document.getElementById("features");
      featuresElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <section className="hero-section custom-hero-image">
        <div className="container text-center">
          <div className="animate-fade-in max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Experience Rural Tranquility
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Escape to our peaceful farm stay and immerse yourself in nature's beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-estancia-600 hover:bg-estancia-700 text-white">
                <RouterLink to="/book">Book Your Stay</RouterLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white">
                <RouterLink to="/gallery">Explore Gallery</RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Welcome to Poojitha's Estancia
            </h2>
            <p className="text-muted-foreground text-lg">
              Nestled in the serene countryside of Telangana, our farm stay offers a
              perfect retreat from the hustle and bustle of city life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Poojitha's Estancia is a charming farm stay that offers an authentic rural
                experience with modern comforts. Our property spans across acres of lush
                greenery, providing a peaceful sanctuary for nature lovers.
              </p>
              <p className="text-lg">
                Whether you're seeking a weekend getaway, a family vacation, or a
                romantic retreat, our farm stay promises an unforgettable experience.
                Wake up to the chirping of birds, take leisurely walks through our
                gardens, and witness breathtaking sunsets over the horizon.
              </p>
              <div className="pt-4">
                <Button asChild variant="default" className="bg-estancia-600 hover:bg-estancia-700">
                  <RouterLink to="/book">Book Your Stay</RouterLink>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
                alt="Estate garden view"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
                alt="Scenic view of the farm"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80"
                alt="Farm animals"
                className="w-full h-64 object-cover rounded-lg col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Experience Our Features
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the many amenities that make Poojitha's Estancia a perfect
              retreat for your next getaway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              title="Scenic Beauty"
              description="Surrounded by rolling hills and lush landscapes, our farm stay offers breathtaking views at every turn."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              }
            />
            <Feature
              title="Private Garden Oasis"
              description="Relax in our beautifully maintained gardens, perfect for morning yoga, meditation, or simply unwinding with a book."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9 12s.5-2.5 3-2.5 3 2.5 3 2.5" />
                  <path d="M12 12v3" />
                </svg>
              }
            />
            <Feature
              title="Tranquil Ambiance"
              description="Experience the calming sounds of nature, from rustling leaves to melodious birdsong, creating the perfect atmosphere for relaxation."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 5v14" />
                  <path d="M18 9h-6" />
                  <path d="M18 15h-6" />
                  <path d="M2 14.5A2.5 2.5 0 0 0 4.5 17H9" />
                  <path d="M2 8.5A2.5 2.5 0 0 1 4.5 6H9" />
                </svg>
              }
            />
            <Feature
              title="Farm-to-Table Dining"
              description="Savor fresh, organic meals prepared with ingredients harvested from our own farm, offering a true farm-to-table experience."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2" />
                  <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
                  <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                </svg>
              }
            />
            <Feature
              title="Rustic Accommodations"
              description="Stay in our thoughtfully designed cottages that blend rustic charm with modern amenities for a comfortable and authentic experience."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              }
            />
            <Feature
              title="Cultural Experiences"
              description="Immerse yourself in local culture through traditional activities, crafts, and cuisine, providing a glimpse into rural life."
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="3" width="8" height="13" rx="4" />
                  <path d="M19 7c0-1.7-1.3-3-3-3h-2m0 15v-3m-6 3v-3" />
                  <path d="M8 16h8" />
                  <path d="M18 21a2 2 0 0 1-2-2V5" />
                  <path d="M6 21a2 2 0 0 0 2-2V5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-estancia-100/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready for an Unforgettable Getaway?
            </h2>
            <p className="text-xl mb-8">
              Book your stay at Poojitha's Estancia and create memories that will last a lifetime.
            </p>
            <Button asChild size="lg" className="bg-estancia-600 hover:bg-estancia-700">
              <RouterLink to="/book">Book Your Stay Now</RouterLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
