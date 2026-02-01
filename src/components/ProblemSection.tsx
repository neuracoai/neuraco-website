import { motion } from "framer-motion";
import { MessageSquare, FileText, CheckSquare, Search, Bot, AlertTriangle } from "lucide-react";

const tools = [
  { name: "Slack", icon: MessageSquare },
  { name: "Notion", icon: FileText },
  { name: "Jira", icon: CheckSquare },
  { name: "Google Docs", icon: FileText },
  { name: "AI Tools", icon: Bot },
];

const problems = [
  { text: "Lost context", desc: "Conversations scattered across platforms" },
  { text: "Scattered knowledge", desc: "Critical info buried in docs" },
  { text: "Blocked work", desc: "No one knows who's waiting on what" },
  { text: "No visibility", desc: "Managers flying blind" },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your team is <span className="text-destructive">drowning</span> in tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remote teams juggle 5+ disconnected apps every day. Context is lost. Work gets blocked. Nobody knows what's really happening.
          </p>
        </motion.div>

        {/* Tool icons scattered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
            >
              <tool.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">{tool.name}</span>
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
              className="relative p-6 rounded-xl bg-card border border-destructive/20 group hover:border-destructive/40 transition-colors"
            >
              <AlertTriangle className="w-8 h-8 text-destructive/60 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{problem.text}</h3>
              <p className="text-muted-foreground">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
