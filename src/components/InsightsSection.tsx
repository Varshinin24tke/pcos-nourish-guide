import { Users, Eye, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    stat: "1 in 10",
    label: "women have PCOS worldwide",
    bg: "bg-rose",
  },
  {
    icon: Eye,
    stat: "70%",
    label: "of cases remain undiagnosed",
    bg: "bg-lavender",
  },
  {
    icon: TrendingUp,
    stat: "90%",
    label: "improve symptoms with lifestyle changes",
    bg: "bg-mint",
  },
];

const InsightsSection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Key <span className="text-primary">Insights</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.stat}
              className="rounded-2xl bg-card p-8 text-center soft-shadow transition-transform hover:scale-[1.02]"
            >
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${s.bg}`}>
                <s.icon size={24} className="text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary">{s.stat}</p>
              <p className="mt-2 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
