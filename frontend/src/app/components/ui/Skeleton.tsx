import React from "react";

interface SkeletonProps {
    children: React.ReactNode;
}

export default function Skeleton({ children }: SkeletonProps) {
    return (
        <div className="skeleton">{children}</div>
    );
}