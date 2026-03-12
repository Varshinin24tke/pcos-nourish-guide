import { Leaf, Wheat, Flame, Drumstick, Droplets } from "lucide-react";

const foods = [
  {
    icon: Wheat,
    title: "Low GI Foods",
    desc: "Help regulate blood sugar and insulin levels.",
    examples: "Oats, quinoa, brown rice, lentils, sweet potatoes",
    bg: "bg-peach",
  },
  {
    icon: Leaf,
    title: "High Fiber Foods",
    desc: "Improve digestion and help with weight management.",
    examples: "Broccoli, spinach, beans, chia seeds, berries",
    bg: "bg-mint",
  },
  {
    icon: Flame,
    title: "Anti-inflammatory Foods",
    desc: "Reduce chronic inflammation associated with PCOS.",
    examples: "Turmeric, tomatoes, olive oil, leafy greens, fatty fish",
    bg: "bg-lavender",
  },
  {
    icon: Drumstick,
    title: "Protein Rich Foods",
    desc: "Support muscle health and keep you feeling full longer.",
    examples: "Chicken, eggs, tofu, Greek yogurt, lentils",
    bg: "bg-rose",
  },
  {
    icon: Droplets,
    title: "Healthy Fats",
    desc: "Support hormone production and brain health.",
    examples: "Avocado, nuts, seeds, olive oil, salmon",
    bg: "bg-peach",
  },
];

const DietRecommendations = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Healthy Foods for <span className="text-primary">PCOS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choosing the right foods can make a significant difference in
            managing PCOS symptoms.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-card p-6 soft-shadow transition-transform hover:scale-[1.02]"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}>
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold">{f.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{f.desc}</p>
              <p className="rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium">
                {f.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DietRecommendations;
