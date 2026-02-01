import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Your team works naturally",
    description: "Chat, write docs, create tasks — just like you always do. NeuraCo feels familiar from day one.",
  },
  {
    number: "02",
    title: "Everything connects automatically",
    description: "Links, mentions, and context flow into a unified knowledge graph. No manual tagging required.",
  },
  {
    number: "03",
    title: "AI helps you move faster",
    description: "Ask anything. Find blockers. Get summaries. AI agents analyze your graph and surface what matters.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 border-t-2 border-border bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 border-2 border-border text-xs uppercase tracking-widest text-muted-foreground mb-6">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Simple to adopt, powerful to use
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex gap-8 items-start"
            >
              <div className="w-16 h-16 border-2 border-foreground flex items-center justify-center shrink-0">
                <span className="text-lg font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
