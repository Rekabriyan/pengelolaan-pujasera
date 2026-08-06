import StallCard from "../ui/StallsCard";
import Typography from "../ui/Typography";

const stalls = [
    {
        image: "/images/ramen.jpg",
        name: "Sakura Ramen",
        description:
            "Authentic Hakata-style tonkotsu ramen simmered for 12 hours for maximum umami.",
        category: "Japanese",
        rating: 4.9,
        time: "10-15 min",
        location: "Lv1, A4",
    },
    {
        image: "/images/burger.jpg",
        name: "Iron Grill Burgers",
        description:
            "Premium wagyu smash burgers, loaded fries, and thick milkshakes.",
        category: "American",
        rating: 4.7,
        time: "15-20 min",
        location: "Lv2, B1",
    },
    {
        image: "/images/satay.jpg",
        name: "Satay Sultan",
        description:
            "Charcoal-grilled perfection. Tender chicken and beef skewers.",
        category: "Local",
        rating: 4.8,
        badge: "SELLING FAST",
        time: "10-15 min",
        location: "Lv1, C3",
    },
];

export default function PopularStalls() {
    return (
        <section className="mx-5 my-8">
            <div className="mb-5">
                <Typography variant="h1" weight="bold">
                    Popular Stalls
                </Typography>

                <p className="text-gray-500">
                    Most favorite food stalls this week.
                </p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-2">
                {stalls.map((stall) => (
                    <StallCard
                        key={stall.name}
                        {...stall}
                    />
                ))}
            </div>
        </section>
    );
}