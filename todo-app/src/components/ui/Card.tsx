import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 transition-colors duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
