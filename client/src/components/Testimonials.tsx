import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Student Spotlight
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
          Subscribe to our Youtube channel to watch more videos
        </p>

        <div className="relative">
          {/* Mobile View: Single Card */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-blue-600 text-white p-6 rounded-lg mx-auto max-w-sm"
            >
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-center mb-4 text-sm">
                "{testimonials[currentSlide].text}"
              </p>
              <p className="text-center font-semibold">
                {testimonials[currentSlide].name}
              </p>
            </motion.div>
          </div>

          {/* Desktop View: Multiple Cards */}
          <div className="hidden md:flex justify-center gap-4 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0.5,
                  scale: currentSlide === index ? 1 : 0.8,
                }}
                className={`bg-blue-600 text-white p-6 rounded-lg max-w-sm ${
                  currentSlide === index ? "z-10" : "z-0"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-center mb-4">"{testimonial.text}"</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
