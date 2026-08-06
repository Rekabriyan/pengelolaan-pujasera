import Image from "next/image";
import Icon from "../ui/Icons";

interface StallCardProps {
  image: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  time: string;
  location: string;
  badge?: string;
}

export default function StallCard({
  image,
  name,
  description,
  category,
  rating,
  time,
  location,
  badge,
}: StallCardProps) {
  return (
    <div className="min-w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold shadow">
          ⭐ {rating}
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute bottom-3 left-3 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <span className="rounded bg-orange-100 px-2 py-1 text-xs font-medium uppercase text-orange-600">
            {category}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        <div className="flex items-center gap-5 border-t pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Icon name="clock" size={16} />
            {time}
          </div>

          <div className="flex items-center gap-1">
            <Icon name="mapPin" size={16} />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}