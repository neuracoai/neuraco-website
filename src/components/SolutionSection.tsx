import { motion } from "framer-motion";
import { MessageSquare, FileText, CheckSquare, Users, FolderKanban, Sparkles } from "lucide-react";

const connections = [
  { name: "Messages", icon: MessageSquare },
  { name: "Documents", icon: FileText },
  { name: "Tasks", icon: CheckSquare },
  { name: "People", icon: Users },
  { name: "Projects", icon: FolderKanban },
];

export const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">One workspace. One brain.</span>
            <br />
            <span className="text-foreground">One source of truth.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NeuraCo connects everything your team does into a single knowledge graph that AI can reason over.
          </p>
        </motion.div>

        {/* Connected nodes visualization */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center AI node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary relative z-10"
          >
            <Sparkles className="w-12 h-12 text-primary-foreground" />
          </motion.div>

          {/* Orbiting connection nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {connections.map((item, i) => {
              const angle = (i * 360) / connections.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                  }}
                >
                  {/* Connection line */}
                  <svg
                    className="absolute"
                    style={{
                      width: Math.abs(x) + 40,
                      height: Math.abs(y) + 40,
                      left: x < 0 ? "auto" : -Math.abs(x),
                      right: x < 0 ? -Math.abs(x) : "auto",
                      top: y < 0 ? "auto" : -Math.abs(y),
                      bottom: y < 0 ? -Math.abs(y) : "auto",
                    }}
                  >
                    <line
                      x1={x < 0 ? "100%" : "0"}
                      y1={y < 0 ? "100%" : "0"}
                      x2={x < 0 ? "0" : "100%"}
                      y2={y < 0 ? "0" : "100%"}
                      stroke="url(#lineGrad)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="opacity-50"
                    />
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(186 100% 50%)" />
                        <stop offset="100%" stopColor="hsl(270 60% 60%)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Node */}
                  <div className="w-20 h-20 rounded-xl glass border border-primary/30 flex flex-col items-center justify-center gap-1 hover:border-primary/60 transition-colors cursor-pointer group">
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-muted-foreground">{item.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Spacer for absolute positioned elements */}
          <div className="h-80" />
        </div>
      </div>
    </section>
  );
};
