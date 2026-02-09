import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "white" | "black";
}

const sizeClasses = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

const colorClasses = {
  default: "border-black dark:border-white text-black dark:text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-black",
  white: "border-white text-white hover:bg-white hover:text-black",
  black: "border-black text-black hover:bg-gray-800 hover:text-white",
}

const Button: React.FC<ButtonProps> = ({ text, href, size = "md", color = "default" }) => {
  return (
    <Link
      href={href}
      className={`inline-block border rounded-full ${colorClasses[color]} transition ${sizeClasses[size]}`}
    >
      {text}
    </Link>
  );
};

export default Button;
