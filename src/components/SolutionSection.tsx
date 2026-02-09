import { motion } from "framer-motion";

const connections = ["Messages", "Documents", "Tasks", "People", "Projects"];

export const SolutionSection = () => {
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
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            One workspace. One brain.
            <br />
            One source of truth.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praxiym connects everything your team does into a single knowledge graph that AI can reason over.
          </p>
        </motion.div>

        {/* Graph visualization */}
        <div className="relative max-w-2xl mx-auto">
          {/* Center node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="w-24 h-24 mx-auto border-2 border-foreground flex items-center justify-center relative z-10 bg-background"
          >
            <span className="text-sm uppercase tracking-widest">AI</span>
          </motion.div>

          {/* Orbiting nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {connections.map((item, i) => {
              const angle = (i * 360) / connections.length - 90;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  }}
                >
                  <div className="w-20 h-10 border-2 border-border flex items-center justify-center bg-background hover:border-foreground transition-colors">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{item}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: "100%", height: "260px", top: "50%", left: "70%", transform: "translate(-50%, -50%)" }}>
            {connections.map((_, i) => {
              const angle = (i * 360) / connections.length - 90;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const centerX = 200;
              const centerY = 130;

              return (
                <motion.line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={centerX + x}
                  y2={centerY + y}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-border"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                />
              );
            })}
          </svg>

          {/* Spacer */}
          <div className="h-64" />
        </div>
      </div>
    </section>
  );
};
