import React from "react";

interface TableProps {
    children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
    return <table className="table">{children}</table>;
}