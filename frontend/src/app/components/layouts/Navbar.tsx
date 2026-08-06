"use client"

import React from "react";
import SearchBar from "../ui/Searchbar";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import Icon from "../ui/Icons";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container flex justify-between items-center gap-5 p-3 bg-color-surface-container">
                <div className="flex gap-5">
                    <div className="logo">CulinaryOps</div>
                    <div><a href="/" className="nav-link">Home</a></div>
                    <div><a href="/dashboard" className="nav-link">Stall</a></div>
                    <div><a href="/orders" className="nav-link">Orders</a></div>
                    <div><a href="/inventory" className="nav-link">Inventory</a></div>
                </div>
                <div className="flex items-center gap-8">
                    <SearchBar value="" onChange={() => { }} onSearch={() => { }} />
                    <Icon name="bell" className="text-color-primary"/>
                    <Icon name="circleQuestionMark" className="text-color-primary"/>
                    <Avatar src="/avatar.png" alt="Avatar"></Avatar>
                </div>
            </div>
        </nav>
    );
}
