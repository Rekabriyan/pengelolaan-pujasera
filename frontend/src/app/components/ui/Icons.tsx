"use client";

import {
  Search,
  User,
  Home,
  ShoppingCart,
  Settings,
  Bell,
  Menu,
  X,
  CircleQuestionMark,
  Pizza,
  Hamburger,
  Soup,
  CupSoda,
  Dessert,
  Fish,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const icons = {
  search: Search,
  user: User,
  home: Home,
  cart: ShoppingCart,
  settings: Settings,
  bell: Bell,
  menu: Menu,
  close: X,
  circleQuestionMark : CircleQuestionMark,
  pizza: Pizza,
  hamburger: Hamburger,
  soup: Soup,
  cupSoda: CupSoda,
  dessert: Dessert,
  fish: Fish,
  clock: Clock,
  mapPin: MapPin
};

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({
  name,
  size = 32,
  className,
  strokeWidth = 2,
}: IconProps) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}