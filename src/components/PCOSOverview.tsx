import { ExternalLink } from "lucide-react";

const PCOSOverview = () => {
  const points = [
    {
      title: "What is PCOS?",
      text: "Polycystic Ovary Syndrome is a hormonal disorder common among women of reproductive age, affecting the ovaries and overall metabolism.",
    },
    {
      title: "Why Diet Matters",
      text: "A balanced diet helps regulate insulin levels, reduce inflammation, and manage weight — all crucial for PCOS symptom management.",
    },
    {
      title: "Hormonal Imbalance",
      text: "PCOS causes elevated androgens and insulin resistance, leading to irregular cycles, weight gain, and other symptoms.",
    },
    {
      title: "Impact on Metabolism",
      text: "Women with PCOS often have slower metabolism and higher risk of type 2 diabetes, making dietary choices especially important.",
    },
  ];

  return (
    <section id="pcos-overview" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Understanding <span className="text-primary">PCOS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Knowledge is power. Understanding your body is the first step
            toward better health.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-card p-6 soft-shadow transition-transform hover:scale-[1.02]"
            >
              <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
              <p className="text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lavender px-6 py-3 font-semibold text-accent-foreground transition-all hover:opacity-80"
          >
            Learn More on Wikipedia <ExternalLink size={16} />
          </a>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/infertility"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 font-semibold text-foreground transition-all hover:opacity-80"
          >
            WHO Fact Sheet <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PCOSOverview;
