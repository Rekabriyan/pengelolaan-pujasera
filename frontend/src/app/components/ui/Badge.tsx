import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Badge({ children, onClick }: BadgeProps) {
    return <button className="badge" onClick={onClick}>{children}</button>;
}