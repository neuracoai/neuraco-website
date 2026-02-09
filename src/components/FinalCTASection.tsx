import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-32 border-t-2 border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Stop managing tools.
            <br />
            <span className="text-muted-foreground">Start managing knowledge.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            Join forward-thinking teams who've unified their workspace. Get early access today.
          </p>

          <Button variant="cta" size="xl" className="group">
            Join Praxiym
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-muted-foreground mt-6 text-xs uppercase tracking-widest">
            Free to start • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};
