import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { PhoneCall } from "lucide-react";
import emailjs from '@emailjs/browser';

// EmailJS configuration
emailjs.init("aNrQR-4LEGlEzd5XB");

// Mock data - in a real app, these would come from the backend
const bookedDates = [
  new Date(2025, 4, 20), // May 20, 2025
  new Date(2025, 4, 21), // May 21, 2025
  new Date(2025, 4, 22), // May 22, 2025
  new Date(2025, 4, 28), // May 28, 2025
  new Date(2025, 4, 29), // May 29, 2025
  new Date(2025, 5, 5),  // June 5, 2025
  new Date(2025, 5, 6),  // June 6, 2025
  new Date(2025, 5, 7),  // June 7, 2025
];

const Book = () => {
  const { toast } = useToast();
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const isDateUnavailable = (date: Date) => {
    return bookedDates.some((bookedDate) =>
      date.getDate() === bookedDate.getDate() &&
      date.getMonth() === bookedDate.getMonth() &&
      date.getFullYear() === bookedDate.getFullYear()
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDates.from || !selectedDates.to || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Prepare data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      check_in: selectedDates.from ? format(selectedDates.from, "PPP") : '',
      check_out: selectedDates.to ? format(selectedDates.to, "PPP") : '',
      guests: guests,
    };
    
    console.log("Sending email with params:", templateParams);
    
    // Send email using EmailJS
    emailjs.send(
      'service_s46etvp',
      'template_dp7ioi6',
      templateParams,
      'aNrQR-4LEGlEzd5XB'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you shortly to confirm your reservation.",
      });
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setSelectedDates({
        from: undefined,
        to: undefined,
      });
      setGuests(1);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      toast({
        title: "Email Sending Failed",
        description: "There was an error sending your booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
      setIsLoading(false);
    });
  };

  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Book Your Stay</h1>
          <p className="text-lg text-muted-foreground">
            Select your dates to start your peaceful retreat at Poojitha's Estancia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Availability Calendar</CardTitle>
              <CardDescription>
                Green dates are available, red dates are already booked
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar
                  mode="range"
                  selected={selectedDates}
                  onSelect={setSelectedDates as any}
                  disabled={[
                    { before: new Date() }, // Disable past dates
                    isDateUnavailable,
                  ]}
                  modifiers={{
                    booked: bookedDates,
                  }}
                  modifiersStyles={{
                    booked: { 
                      backgroundColor: "#fee2e2", 
                      color: "#b91c1c",
                      fontWeight: "bold" 
                    },
                  }}
                  showOutsideDays
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start space-y-2 border-t pt-6">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-estancia-500"></div>
                <span className="text-sm">Selected dates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-red-100 border border-red-500"></div>
                <span className="text-sm">Unavailable dates</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Booking Details</CardTitle>
              <CardDescription>
                Complete the form below to request your reservation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dates">Selected Dates</Label>
                  <Input 
                    id="dates"
                    value={
                      selectedDates.from && selectedDates.to
                        ? `${format(selectedDates.from, "PPP")} - ${format(selectedDates.to, "PPP")}`
                        : "Please select dates from the calendar"
                    }
                    readOnly
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-estancia-600 hover:bg-estancia-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Request Booking"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Note: This is a booking request. We will contact you to confirm availability and process payment.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 bg-muted p-6 md:p-10 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-medium mb-2">Need Help With Your Booking?</h3>
              <p className="text-muted-foreground">
                Have questions or special requirements? Our booking team is here to help with your reservation.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Call us directly:</p>
              <Button asChild variant="outline" className="border-estancia-600 text-estancia-600 flex gap-2 items-center">
                <a href="tel:+919876543210">
                  <PhoneCall className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
