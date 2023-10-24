"use client";
import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          "p-4 border border-neutral-500 rounded-md flex items-center gap-x-2 justify-between disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
