import { motion } from "framer-motion";
import { featuresData } from "../data";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  isBlue?: boolean;
}

// ... existing FeatureCard component and icon components ...
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  isBlue,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg ${
        isBlue ? "bg-blue-600 text-white" : "bg-white"
      } shadow-lg`}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className="w-6 h-6 text-[#5D5959]" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className={`text-sm ${isBlue ? "text-white/90" : "text-gray-600"}`}>
        {description}
      </p>
      <div className="mt-4">
        <motion.button whileHover={{ x: 10 }} className="flex items-center">
          Learn More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-blue-gradient bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isBlue={feature.isBlue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
