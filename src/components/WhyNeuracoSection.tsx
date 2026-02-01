import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";

export const WhyNeuracoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8 glow-primary">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            NeuraCo is not another{" "}
            <span className="text-muted-foreground line-through">Slack</span> or{" "}
            <span className="text-muted-foreground line-through">Notion</span>
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
            It's a <span className="text-foreground font-semibold">thinking system</span> for your company.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
            <span className="text-muted-foreground">Tools manage files</span>
            <ArrowRight className="w-5 h-5 text-primary hidden md:block" />
            <span className="text-foreground font-semibold gradient-text">NeuraCo manages knowledge</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
