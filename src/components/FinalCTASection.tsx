import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop managing tools.
            <br />
            <span className="gradient-text glow-text">Start managing knowledge.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
            Join forward-thinking teams who've unified their workspace. Get early access today.
          </p>

          <Button variant="cta" size="xl" className="group">
            Join NeuraCo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-muted-foreground mt-6 text-sm">
            Free to start • No credit card required • Setup in 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};
