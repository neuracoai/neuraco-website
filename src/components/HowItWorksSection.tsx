import { motion } from "framer-motion";
import { MessageSquare, Network, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Your team works naturally",
    description: "Chat, write docs, create tasks — just like you always do. NeuraCo feels familiar from day one.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Everything connects automatically",
    description: "Links, mentions, and context flow into a unified knowledge graph. No manual tagging required.",
    icon: Network,
  },
  {
    number: "03",
    title: "AI helps you move faster",
    description: "Ask anything. Find blockers. Get summaries. AI agents analyze your graph and surface what matters.",
    icon: Zap,
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple to adopt,{" "}
            <span className="gradient-text">powerful to use</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <span className="text-6xl font-bold text-primary/20 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
