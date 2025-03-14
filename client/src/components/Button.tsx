import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  animation?: Partial<
    Pick<
      HTMLMotionProps<"button">,
      "whileHover" | "whileTap" | "initial" | "animate" | "transition"
    >
  >;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  animation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-medium transition-all duration-200 ease-in-out";

  const variants = {
    primary: "bg-[#1C75BD] text-white hover:opacity-90",
    secondary: `bg-transparent text-[#151414] border border-[#1A4D6E]`,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...animation}
    >
      {children}
    </motion.button>
  );
}
