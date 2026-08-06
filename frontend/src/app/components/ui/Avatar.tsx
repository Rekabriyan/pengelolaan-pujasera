import React from "react";

interface AvatarProps {
    src: string;
    alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
    return <img src={src} alt={alt} className="avatar" />;
}