
import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estancia-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/2ea29925-68a8-46c3-a463-cde106bea20e.png" 
                alt="Poojitha's Estancia Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-estancia-100 max-w-xs">
              Experience tranquility and nature's beauty at our scenic farm stay retreat in Telangana.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium">Contact</h4>
            <address className="not-italic text-estancia-100 space-y-2">
              <p>Survey No.78/8, Before Chilkur X Roads,</p>
              <p>Nazeebnagar, Bhakaram Village,</p>
              <p>Moinabad, Telangana 501504</p>
              <p className="pt-2">
                <span className="block">Phone: +91 91548 55984</span>
                <span className="block">Email: poojithaagrotech@gmail.com</span>
              </p>
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-estancia-100 hover:text-white transition">
                Home
              </Link>
              <Link to="/#features" className="text-estancia-100 hover:text-white transition">
                Features
              </Link>
              <Link to="/gallery" className="text-estancia-100 hover:text-white transition">
                Gallery
              </Link>
              <Link to="/pricing" className="text-estancia-100 hover:text-white transition">
                Pricing
              </Link>
              <Link to="/book" className="text-estancia-100 hover:text-white transition">
                Book Now
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-estancia-700 hover:bg-estancia-600 transition h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/poojithasestancia/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-estancia-700 hover:bg-estancia-600 transition h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465 1.066-.047 1.405-.06 4.122-.06zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.88-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.67.01 2.988.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.88.3 1.857.344 1.054.048 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.88.344-1.857.048-1.054.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.88-.3-1.857-.344-1.053-.048-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.684a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-estancia-700 hover:bg-estancia-600 transition h-10 w-10 rounded-full flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <div className="pt-2">
              <p className="text-estancia-100 text-sm">
                &copy; {new Date().getFullYear()} Poojitha's Estancia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Google Maps Section */}
        <div className="mt-8 pt-8 border-t border-estancia-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-serif font-medium flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-estancia-400" />
                Find Us
              </h4>
              <p className="text-estancia-100 mb-4">
                Located in the serene outskirts of Hyderabad, our farm stay is easily accessible while offering complete privacy and tranquility.
              </p>
              <a 
                href="https://maps.app.goo.gl/i5yRr6oG9FS2w9Aj7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-estancia-400 hover:text-white transition"
              >
                Get Directions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="w-full md:w-2/3">
              <div className="rounded-lg overflow-hidden w-full h-[300px] border-4 border-estancia-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.3367861188085!2d78.28818799999998!3d17.2992922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbc10d3a54c513%3A0xd3f810a6a1de5e18!2sPoojitha&#39;s%20Estancia!5e0!3m2!1sen!2sin!4v1747357407735!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poojitha's Estancia Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
