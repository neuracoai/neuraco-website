import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { KnowledgeGraph } from "./KnowledgeGraph";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background graph */}
      <KnowledgeGraph />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border mb-8"
          >
            <span className="w-2 h-2 bg-foreground" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Now in Beta</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Praxiym
            <span className="block text-muted-foreground">The AI Brain for Remote Teams</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Chat, documents, tasks, and AI agents — all connected in one intelligent graph.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get Early Access
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
