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
  weight: number,
  height: number,
  activity: string,
  symptoms: string[]
): DietPlan => {

  const bmi = weight / ((height / 100) ** 2);
  const isOverweight = bmi > 25;

  if (isOverweight || symptoms.includes("weight") || symptoms.includes("cravings")) {
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
        "Brown rice with lentil curry and salad",
        "Quinoa salad with chickpeas and avocado",
        "Grilled salmon with quinoa and vegetables",
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
        "Greek yogurt with honey",
        "Mixed nuts and dried fruit",
        "Protein smoothie",
      ]),
      lunch: random([
        "Chicken breast with sweet potato",
        "Quinoa bowl with grilled vegetables",
        "Brown rice with tofu curry",
      ]),
      snack2: random([
        "Trail mix",
        "Apple with peanut butter",
        "Protein bar",
      ]),
      dinner: random([
        "Tofu stir-fry with brown rice",
        "Paneer curry with roti",
        "Grilled fish with vegetables",
      ]),
    };
  }

  return {
    breakfast: random([
      "Whole grain toast with avocado and eggs",
      "Oatmeal with berries",
      "Greek yogurt with granola",
    ]),
    snack1: random([
      "Fresh fruit salad",
      "Handful of almonds",
      "Apple with peanut butter",
    ]),
    lunch: random([
      "Mediterranean chickpea salad",
      "Quinoa vegetable bowl",
      "Brown rice with lentils",
    ]),
    snack2: random([
      "Rice cakes with almond butter",
      "Mixed nuts",
      "Yogurt with berries",
    ]),
    dinner: random([
      "Baked chicken with sweet potatoes",
      "Vegetable tofu stir fry",
      "Paneer with whole wheat roti",
    ]),
  };
};

const DietTool = () => {

  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
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
    const newPlan = generatePlan(weight, height, activity, symptoms);
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
            Answer a few questions to receive a suggested daily meal plan
            tailored for PCOS management.
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
  step="1"
  required
  onKeyDown={(e) => e.preventDefault()}
  onChange={(e) => setAge(Number(e.target.value))}
  className="w-full rounded-xl border bg-background px-4 py-3 text-sm"
/>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold">Weight (kg)</label>
              <input
  type="number"
  value={weight}
  min="30"
  max="100"
  step="1"
  required
  onKeyDown={(e) => e.preventDefault()}
  onChange={(e) => setWeight(Number(e.target.value))}
  className="w-full rounded-xl border bg-background px-4 py-3 text-sm"
/>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold">Height (cm)</label>
              <input
  type="number"
  value={height}
  min="120"
  max="220"
  step="1"
  required
  onKeyDown={(e) => e.preventDefault()}
  onChange={(e) => setHeight(Number(e.target.value))}
  className="w-full rounded-xl border bg-background px-4 py-3 text-sm"
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
                      : "bg-muted text-muted-foreground"
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
                      : "bg-muted text-muted-foreground"
                  }`}
                >

                  {s.label}

                </button>

              ))}

            </div>

          </div>

          <button
            onClick={handleGenerate}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground"
          >

            <Sparkles size={18} /> Generate Diet Plan

          </button>

          {plan && (

            <div className="mt-8 rounded-2xl bg-rose/60 p-6">

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

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default DietTool;