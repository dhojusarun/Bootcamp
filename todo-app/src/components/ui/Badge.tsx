import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "success" | "warning" | "info";
    className?: string;
}

export default function Badge({
    children,
    variant = "success",
    className = "",
}: BadgeProps) {
    const variants = {
        success: "bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-emerald-50",
        warning: "bg-amber-100 dark:bg-amber-600 text-amber-900 dark:text-amber-50",
        info: "bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-blue-50",
    };

    return (
        <span
            className={`shrink-0 text-xs px-2 py-1 rounded-full font-bold ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
