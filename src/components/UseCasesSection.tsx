import { motion } from "framer-motion";
import { Rocket, Code, Globe } from "lucide-react";

const useCases = [
  {
    title: "For Founders",
    description: "Instant visibility into what's blocked and why. Stop asking for status updates — see the truth in real-time.",
    icon: Rocket,
    gradient: "from-amber-500 to-orange-500",
    benefit: "Save 5+ hours per week on status meetings",
  },
  {
    title: "For Developers",
    description: "Find specs, discussions, and decisions instantly. No more Slack archaeology or asking \"where was that doc?\"",
    icon: Code,
    gradient: "from-primary to-cyan-400",
    benefit: "Reduce context-switching by 60%",
  },
  {
    title: "For Remote Teams",
    description: "No more lost context when team members work across time zones. Everything stays connected and searchable.",
    icon: Globe,
    gradient: "from-secondary to-purple-400",
    benefit: "Async collaboration that actually works",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for how{" "}
            <span className="gradient-text">modern teams</span> work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Benefit tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {useCase.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
