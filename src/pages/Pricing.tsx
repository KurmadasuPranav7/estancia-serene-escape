
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, Users } from "lucide-react";

const accommodationPricingData = [
  {
    id: 1,
    room: "Garden Cottage",
    occupancy: "2 Adults",
    weekday: 4500,
    weekend: 5500,
    longstay: 4000
  },
  {
    id: 2,
    room: "Family Suite",
    occupancy: "4 Adults",
    weekday: 7500,
    weekend: 9000,
    longstay: 6800
  },
  {
    id: 3,
    room: "Deluxe Villa",
    occupancy: "6 Adults",
    weekday: 12000,
    weekend: 15000,
    longstay: 10500
  },
  {
    id: 4,
    room: "Rustic Cabin",
    occupancy: "2 Adults",
    weekday: 3800,
    weekend: 4800,
    longstay: 3400
  },
  {
    id: 5,
    room: "Luxury Tent",
    occupancy: "2 Adults",
    weekday: 5200,
    weekend: 6500,
    longstay: 4600
  }
];

const eventPricingData = [
  {
    id: 1,
    guests: "50 Guests",
    price: 75000,
  },
  {
    id: 2,
    guests: "100 Guests",
    price: 90000,
  },
  {
    id: 3,
    guests: "150 Guests",
    price: 100000,
  },
  {
    id: 4,
    guests: "Up to 250 Guests",
    price: 110000,
  }
];

const Pricing = () => {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Choose the perfect accommodation or event space at Poojitha's Estancia
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Accommodation Pricing Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-6 w-6 text-estancia-600" />
                <CardTitle className="text-2xl font-serif">Accommodation Pricing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Accommodation</TableHead>
                      <TableHead>Occupancy</TableHead>
                      <TableHead className="text-right">Weekday Price (₹)</TableHead>
                      <TableHead className="text-right">Weekend Price (₹)</TableHead>
                      <TableHead className="text-right">Long Stay (7+ days)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accommodationPricingData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.room}</TableCell>
                        <TableCell>{item.occupancy}</TableCell>
                        <TableCell className="text-right">₹{item.weekday} / night</TableCell>
                        <TableCell className="text-right">₹{item.weekend} / night</TableCell>
                        <TableCell className="text-right">₹{item.longstay} / night</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-md">
                <h4 className="text-lg font-medium mb-2">Personal Booking Packages</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 mt-0.5 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>₹45,000</strong> for up to 18 guests (9 AC Bedrooms)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 mt-0.5 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>₹1,000</strong> extra per additional mattress (18 mattresses available)</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Event Pricing Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-estancia-600" />
                <CardTitle className="text-2xl font-serif">Event Pricing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Size</TableHead>
                      <TableHead className="text-right">Price (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {eventPricingData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.guests}</TableCell>
                        <TableCell className="text-right">₹{item.price.toLocaleString('en-IN')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-md">
                <h4 className="text-lg font-medium mb-2">Event Booking Notes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 mt-0.5 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>If night stay is not required, <strong>₹25,000</strong> can be adjusted in the event price</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-2 h-5 w-5 mt-0.5 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>For less than 24 hours or odd timings, minimum price for events is <strong>₹75,000</strong> with or without stay</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-estancia-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Standard Package</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">
                ₹5,000 <span className="text-base font-normal text-muted-foreground">/ night</span>
              </div>
              <p className="text-muted-foreground">Perfect for a short getaway</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Accommodation for 2
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Breakfast included
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to garden areas
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Morning farm tour
                </li>
              </ul>
              <Button asChild className="w-full bg-estancia-600 hover:bg-estancia-700 mt-4">
                <Link to="/book">Book Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-estancia-600 shadow-lg relative">
            <div className="absolute top-0 right-0 bg-estancia-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Premium Package</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">
                ₹8,500 <span className="text-base font-normal text-muted-foreground">/ night</span>
              </div>
              <p className="text-muted-foreground">Our most popular choice for families</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Accommodation for 4
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All meals included
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Guided nature walks
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Farm activities
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Evening bonfire
                </li>
              </ul>
              <Button asChild className="w-full bg-estancia-600 hover:bg-estancia-700 mt-4">
                <Link to="/book">Book Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-estancia-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Luxury Package</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">
                ₹15,000 <span className="text-base font-normal text-muted-foreground">/ night</span>
              </div>
              <p className="text-muted-foreground">Ultimate farm stay experience</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Luxury villa for 6
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All meals + premium menu
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Private guided tours
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Exclusive farm experiences
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4 text-estancia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Spa treatments
                </li>
              </ul>
              <Button asChild className="w-full bg-estancia-600 hover:bg-estancia-700 mt-4">
                <Link to="/book">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-muted p-6 md:p-10 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-medium mb-2">Need a Custom Package?</h3>
              <p className="text-muted-foreground">
                We offer tailored packages for special occasions, events, and long-term stays. Contact us to discuss your specific requirements.
              </p>
            </div>
            <Button asChild className="bg-estancia-600 hover:bg-estancia-700">
              <a href="mailto:bookings@poojithasestancia.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
