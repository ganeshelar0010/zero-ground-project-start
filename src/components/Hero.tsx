
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="container px-4 flex flex-col items-center text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Build Something <span className="text-blue-600">Amazing</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Start with this clean, modern template and build your next great idea. Designed for flexibility
          and ready for your creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-md"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-6 rounded-md"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
