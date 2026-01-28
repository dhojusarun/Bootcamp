import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variants = {
        primary: "gradient-primary text-white hover:shadow-lg hover:scale-105",
        secondary: "bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/60",
        danger: "bg-red-100 dark:bg-red-800/40 text-red-700 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800/60",
        ghost: "bg-transparent hover:bg-white/10 text-white",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
