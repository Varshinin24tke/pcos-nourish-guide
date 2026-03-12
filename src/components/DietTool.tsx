import { useState } from "react";
import { Sparkles } from "lucide-react";

interface DietPlan {
  breakfast: string;
  snack1: string;
  lunch: string;
  snack2: string;
  dinner: string;
}

const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generatePlan = (
  age: number,
  weight: number,
  height: number,
  activity: string,
  symptoms: string[]
): DietPlan => {
  const bmi = weight / ((height / 100) ** 2);
  const isOverweight = bmi > 25;
  const hasInsulinIssues =
    symptoms.includes("weight") || symptoms.includes("cravings");

  if (isOverweight || hasInsulinIssues) {
    return {
      breakfast: random([
        "Greek yogurt with chia seeds and berries",
        "Oatmeal with flax seeds and almonds",
        "Vegetable omelette with whole grain toast",
      ]),
      snack1: random([
        "Handful of almonds and a green apple",
        "Roasted chickpeas",
        "Greek yogurt with walnuts",
      ]),
      lunch: random([
        "Grilled salmon with quinoa and roasted vegetables",
        "Brown rice with lentil curry and salad",
        "Quinoa salad with chickpeas and avocado",
      ]),
      snack2: random([
        "Carrot sticks with hummus",
        "Cucumber slices with yogurt dip",
        "Mixed nuts and seeds",
      ]),
      dinner: random([
        "Lentil soup with steamed broccoli",
        "Tofu stir-fry with vegetables",
        "Grilled chicken with quinoa and salad",
      ]),
    };
  }

  if (activity === "high") {
    return {
      breakfast: random([
        "Oatmeal with banana and walnuts",
        "Whole grain toast with peanut butter",
        "Protein smoothie with berries",
      ]),
      snack1: random([
        "Protein smoothie with spinach",
        "Mixed nuts and dried fruit",
        "Greek yogurt with honey",
      ]),
      lunch: random([
        "Chicken breast with sweet potato",
        "Quinoa bowl with grilled vegetables",
        "Brown rice with tofu curry",
      ]),
      snack2: random([
        "Trail mix with dark chocolate",
        "Peanut butter with apple slices",
        "Protein bar",
      ]),
      dinner: random([
        "Tofu stir-fry with brown rice",
        "Grilled fish with vegetables",
        "Paneer curry with whole wheat roti",
      ]),
    };
  }

  return {
    breakfast: random([
      "Whole grain toast with avocado and poached eggs",
      "Oatmeal with berries and flaxseed",
      "Greek yogurt with granola",
    ]),
    snack1: random([
      "Fresh fruit salad",
      "Handful of almonds",
      "Peanut butter with apple slices",
    ]),
    lunch: random([
      "Mediterranean salad with chickpeas",
      "Quinoa vegetable bowl",
      "Brown rice with lentils and vegetables",
    ]),
    snack2: random([
      "Rice cakes with almond butter",
      "Mixed nuts",
      "Yogurt with berries",
    ]),
    dinner: random([
      "Baked chicken with roasted sweet potatoes",
      "Vegetable stir fry with tofu",
      "Paneer with whole wheat roti",
    ]),
  };
};

const DietTool = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [plan, setPlan] = useState<DietPlan | null>(null);

  const symptomOptions = [
    { value: "weight", label: "Weight Gain" },
    { value: "acne", label: "Acne" },
    { value: "hairloss", label: "Hair Loss" },
    { value: "mood", label: "Mood Changes" },
    { value: "cravings", label: "Sugar Cravings" },
    { value: "irregular", label: "Irregular Periods" },
  ];

  const toggleSymptom = (s: string) =>
    setSymptoms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleGenerate = () => {
    if (!age || !weight || !height) {
      alert("Please fill all fields.");
      return;
    }

    const a = Number(age);
    const w = Number(weight);
    const h = Number(height);

    if (a <= 0 || w <= 0 || h <= 0) {
      alert("Age, weight and height must be positive values.");
      return;
    }

    if (a < 10 || a > 100) {
      alert("Please enter a valid age (10-100).");
      return;
    }

    if (w < 30 || w > 200) {
      alert("Please enter a valid weight (30-200 kg).");
      return;
    }

    if (h < 120 || h > 220) {
      alert("Please enter a valid height (120-220 cm).");
      return;
    }

    const newPlan = generatePlan(a, w, h, activity, symptoms);
    setPlan(newPlan);
  };

  return (
    <section id="diet-tool" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get Your Personalized <span className="text-primary">Diet Plan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Answer a few questions to receive a suggested daily meal plan tailored for PCOS management.
          </p>
        </div>

        <div className="rounded-2xl bg-card p-6 soft-shadow-lg md:p-8">

          <div className="grid gap-5 sm:grid-cols-3">

            <div>
              <label className="mb-1.5 block text-sm font-semibold">Age</label>
              <input
                type="number"
                value={age}
                min="10"
                max="100"
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                min="30"
                max="200"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="65"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold">Height (cm)</label>
              <input
                type="number"
                value={height}
                min="120"
                max="220"
                onChange={(e) => setHeight(e.target.value)}
                placeholder="165"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-semibold">Activity Level</label>
            <div className="flex flex-wrap gap-3">
              {["low", "moderate", "high"].map((level) => (
                <button
                  key={level}
                  onClick={() => setActivity(level)}
                  className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all ${
                    activity === level
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-semibold">Symptoms</label>
            <div className="flex flex-wrap gap-2">
              {symptomOptions.map((s) => (
                <button
                  key={s.value}
                  onClick={() => toggleSymptom(s.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    symptoms.includes(s.value)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 soft-shadow"
          >
            <Sparkles size={18} /> Generate Diet Plan
          </button>

          {plan && (
            <div className="mt-8 animate-fade-up rounded-2xl bg-rose/60 p-6">

              <h3 className="mb-4 text-center text-xl font-bold">
                Your Suggested Daily Plan
              </h3>

              <div className="space-y-3">
                {[
                  { label: "🌅 Breakfast", meal: plan.breakfast },
                  { label: "🍎 Morning Snack", meal: plan.snack1 },
                  { label: "🥗 Lunch", meal: plan.lunch },
                  { label: "🥜 Afternoon Snack", meal: plan.snack2 },
                  { label: "🌙 Dinner", meal: plan.dinner },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-card p-4">
                    <span className="text-sm font-bold text-primary">{m.label}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{m.meal}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
              >
                🔄 Regenerate Diet Plan
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default DietTool;