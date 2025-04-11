
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 md:py-32">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Our Services</h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-up [animation-delay:200ms]">
              This is a placeholder for the Services page. You can customize this with your content.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
