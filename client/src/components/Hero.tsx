import { motion } from "framer-motion";
import heroImage from "/images/hero-image.png";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 h-[100vh]">
      <div className="grid md:grid-cols-2 gap-8 items-center -mt-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col md:block"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-5 text-center md:text-left tracking-[-0.03em] bg-gradient-to-r from-[#929292] via-[#3B3434] to-[#929292] bg-clip-text text-transparent drop-shadow-[0px_4px_3px_rgba(245,238,238,0.29)] order-1">
            The future of learning starts{" "}
            <TypeAnimation
              sequence={["now.", 2000, "with you.", 2000, "with Heally.", 2000]}
              wrapper="span"
              speed={50}
              className="text-[#1C75BD]"
              repeat={Infinity}
            />
          </h1>

          <p className="text-[17px] text-center md:text-left font-medium leading-[30px] tracking-[-0.03em] text-[rgba(33,29,29,0.47)] max-w-[551px] order-2">
            Forget outdated, one-size-fits-all learning — embrace personalized,
            AI-powered education that adapts to your pace, challenges your mind,
            and fuels your ambition.
          </p>

          {/* Mobile Image */}
          <div className="md:hidden order-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={heroImage}
                alt="Graduate Student Illustration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 order-4">
            <Button variant="primary">Start Your Journey</Button>

            <Button variant="secondary">Discover More</Button>
          </div>
        </motion.div>

        {/*  Desktop Image - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative hidden md:block"
        >
          <img
            src={heroImage}
            alt="Graduate Student Illustration"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
