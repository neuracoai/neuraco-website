import { motion } from "framer-motion";

const tools = ["Slack", "Notion", "Jira", "Google Docs", "AI Tools"];

const problems = [
  { text: "Lost context", desc: "Conversations scattered across platforms" },
  { text: "Scattered knowledge", desc: "Critical info buried in docs" },
  { text: "Blocked work", desc: "No one knows who's waiting on what" },
  { text: "No visibility", desc: "Managers flying blind" },
];

export const ProblemSection = () => {
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
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Your team is drowning in tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remote teams juggle 5+ disconnected apps every day. Context is lost. Work gets blocked. Nobody knows what's really happening.
          </p>
        </motion.div>

        {/* Tool list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 border-2 border-border text-sm uppercase tracking-wider text-muted-foreground"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border-2 border-border hover:bg-card transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">0{i + 1}</span>
              <h3 className="text-xl font-semibold mb-2">{problem.text}</h3>
              <p className="text-muted-foreground text-sm">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
