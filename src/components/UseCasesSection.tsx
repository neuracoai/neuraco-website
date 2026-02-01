import { motion } from "framer-motion";

const useCases = [
  {
    title: "For Founders",
    description: "Instant visibility into what's blocked and why. Stop asking for status updates — see the truth in real-time.",
    benefit: "Save 5+ hours per week",
  },
  {
    title: "For Developers",
    description: "Find specs, discussions, and decisions instantly. No more Slack archaeology or asking \"where was that doc?\"",
    benefit: "Reduce context-switching by 60%",
  },
  {
    title: "For Remote Teams",
    description: "No more lost context when team members work across time zones. Everything stays connected and searchable.",
    benefit: "Async collaboration that works",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 border-t-2 border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 border-2 border-border text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Built for how modern teams work
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
              className="p-8 border-2 border-border hover:bg-card transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {useCase.description}
              </p>
              <div className="inline-block px-3 py-1 border border-border text-xs uppercase tracking-wider text-muted-foreground">
                {useCase.benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
