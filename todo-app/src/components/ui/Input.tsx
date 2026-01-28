import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 ring-primary focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50 ${className}`}
            {...props}
        />
    );
}
