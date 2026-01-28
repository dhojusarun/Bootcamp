import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function Checkbox({ className = "", ...props }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={`w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer ${className}`}
            {...props}
        />
    );
}
