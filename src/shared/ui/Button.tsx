"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  className,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/30",
    outline:
      "border border-border hover:border-primary hover:text-primary bg-transparent",
    ghost: "text-muted-light hover:text-foreground hover:bg-surface",
  };

  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const motionProps = {
    className: cn(baseStyles, variants[variant], sizes[size], className),
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
