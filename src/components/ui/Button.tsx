"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary: "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-slate-800 focus:ring-primary-500",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
