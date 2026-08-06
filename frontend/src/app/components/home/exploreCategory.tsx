import React from "react";
import Icon from "../ui/Icons";

export default function ExploreCategory() {
    return (
        <div className="m-5 ">
            <h1 className="title my-5">Explore Category</h1>
            <div className="flex gap-3 overflow-x-auto">
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="pizza" className="text-color-primary"/>
                    Pizza
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="hamburger" className="text-color-primary"/>
                    Hamburger
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="soup" className="text-color-primary"/>
                    Soup
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="cupSoda" className="text-color-primary"/>
                    Beverage
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="dessert" className="text-color-primary"/>
                    Dessert
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <Icon name="fish" className="text-color-primary"/>
                    Fish
                </div>
            </div>
        </div>
    );
}
