import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileText, 
  CheckSquare, 
  Network, 
  Bot, 
  Search 
} from "lucide-react";

const features = [
  {
    title: "Smart Chat",
    description: "Slack-like messaging, but every message can link to tasks and docs. Context travels with the conversation.",
    icon: MessageSquare,
    gradient: "from-primary to-cyan-400",
  },
  {
    title: "Markdown Knowledge Base",
    description: "Obsidian-style notes with backlinks and graph visualization. Your second brain, connected to everything.",
    icon: FileText,
    gradient: "from-secondary to-purple-400",
  },
  {
    title: "Task Management",
    description: "Assign tasks, track status, link to chats and docs. See exactly what's blocking what.",
    icon: CheckSquare,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Knowledge Graph",
    description: "Visualize how everything connects across your company. Discover insights you never knew existed.",
    icon: Network,
    gradient: "from-primary to-secondary",
  },
  {
    title: "AI Agents",
    description: 'AI that finds blockers, summarizes projects, and answers questions like "What is delaying the release?"',
    icon: Bot,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    title: "Universal Search",
    description: "Search across messages, docs, and tasks with AI-powered semantic understanding.",
    icon: Search,
    gradient: "from-rose-500 to-pink-400",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need,{" "}
            <span className="gradient-text">connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six powerful tools that work as one. No more tab-switching, no more lost context.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
