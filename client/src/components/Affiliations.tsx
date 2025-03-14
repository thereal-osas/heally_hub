import { motion } from "framer-motion";
import { affiliations } from "../data";

const Affiliations = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Our Affiliations
        </h2>
      </div>
      <div className="bg-blue-gradient bg-cover bg-center w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {affiliations.map((affiliation) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center py-8"
              >
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="w-auto md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
