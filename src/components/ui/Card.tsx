import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-stone-200 shadow-sm hover:border-stone-300 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
