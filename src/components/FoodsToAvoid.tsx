import { AlertTriangle } from "lucide-react";

const avoidFoods = [
  { title: "Sugary Drinks", desc: "Sodas, fruit juices, and sweetened beverages spike blood sugar and worsen insulin resistance." },
  { title: "Refined Carbohydrates", desc: "White bread, pasta, and pastries cause rapid blood sugar spikes." },
  { title: "Processed Foods", desc: "Packaged snacks, fast food, and ready meals contain unhealthy fats and additives." },
  { title: "Excess Dairy", desc: "Some dairy can increase androgen levels and aggravate PCOS symptoms." },
  { title: "Fried Foods", desc: "Deep-fried foods promote inflammation and contribute to weight gain." },
];

const FoodsToAvoid = () => {
  return (
    <section className="bg-rose/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Foods to <span className="text-destructive">Avoid</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Limiting these foods can help reduce inflammation and improve
            hormonal balance.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {avoidFoods.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-destructive/20 bg-card p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <AlertTriangle size={18} className="text-destructive" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodsToAvoid;
