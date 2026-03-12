import {
  CalendarX,
  TrendingUp,
  Frown,
  Scissors,
  PersonStanding,
  Brain,
} from "lucide-react";

const symptoms = [
  { icon: CalendarX, title: "Irregular Periods", text: "Missed, infrequent, or prolonged menstrual cycles are one of the most common signs of PCOS.", bg: "bg-rose" },
  { icon: TrendingUp, title: "Weight Gain", text: "Insulin resistance makes it harder to lose weight, especially around the abdomen.", bg: "bg-lavender" },
  { icon: Frown, title: "Acne", text: "Hormonal imbalances can cause persistent acne on the face, chest, and back.", bg: "bg-peach" },
  { icon: Scissors, title: "Hair Loss", text: "Thinning hair on the scalp due to elevated androgen levels.", bg: "bg-mint" },
  { icon: PersonStanding, title: "Excess Hair Growth", text: "Hirsutism — unwanted hair growth on the face and body due to excess androgens.", bg: "bg-rose" },
  { icon: Brain, title: "Mood Changes", text: "Anxiety, depression, and mood swings are common due to hormonal fluctuations.", bg: "bg-lavender" },
];

const SymptomsSection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Common <span className="text-primary">Symptoms</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Recognizing symptoms early can help you take proactive steps toward
            managing PCOS effectively.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-card p-6 text-center soft-shadow transition-transform hover:scale-[1.02]"
            >
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${s.bg}`}>
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
