"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
