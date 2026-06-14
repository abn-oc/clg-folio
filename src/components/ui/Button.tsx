import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "cta" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const variantClasses = {
  primary:
    "bg-navy text-white hover:bg-navy-light focus-visible:ring-2 focus-visible:ring-navy/40 focus-visible:ring-offset-2",
  cta:
    "bg-cta text-white hover:bg-cta-dark focus-visible:ring-2 focus-visible:ring-cta/40 focus-visible:ring-offset-2",
  outline:
    "border border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-2 focus-visible:ring-navy/40 focus-visible:ring-offset-2",
  ghost:
    "text-stone-600 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-stone-400/40 focus-visible:ring-offset-2",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
