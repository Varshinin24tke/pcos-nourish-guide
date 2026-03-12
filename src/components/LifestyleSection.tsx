import { Dumbbell, Wind, Moon, Salad } from "lucide-react";

const tips = [
  {
    icon: Dumbbell,
    title: "Regular Exercise",
    desc: "30 minutes of moderate exercise daily improves insulin sensitivity and mood. Try walking, yoga, or swimming.",
    bg: "bg-mint",
  },
  {
    icon: Wind,
    title: "Stress Management",
    desc: "Practice meditation, deep breathing, or journaling to manage cortisol levels and reduce PCOS flare-ups.",
    bg: "bg-lavender",
  },
  {
    icon: Moon,
    title: "Good Sleep",
    desc: "Aim for 7-9 hours of quality sleep. Poor sleep worsens insulin resistance and hormonal imbalance.",
    bg: "bg-rose",
  },
  {
    icon: Salad,
    title: "Balanced Diet",
    desc: "Focus on whole foods, lean proteins, healthy fats, and plenty of vegetables for optimal hormone health.",
    bg: "bg-peach",
  },
];

const LifestyleSection = () => {
  return (
    <section className="bg-lavender/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Lifestyle <span className="text-primary">Management</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Small daily habits can lead to significant improvements in PCOS
            management.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl bg-card p-6 text-center soft-shadow transition-transform hover:scale-[1.02]"
            >
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${t.bg}`}>
                <t.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
