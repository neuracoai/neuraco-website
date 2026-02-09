import { motion } from "framer-motion";

export const WhyPraxiymSection = () => {
  return (
    <section className="py-24 border-t-2 border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-foreground mb-8">
            <span className="text-2xl font-bold">P</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Praxiym is not another{" "}
            <span className="line-through text-muted-foreground">Slack</span> or{" "}
            <span className="line-through text-muted-foreground">Notion</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            It's a <span className="text-foreground font-semibold">thinking system</span> for your company.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm uppercase tracking-wider">
            <span className="text-muted-foreground">Tools manage files</span>
            <span className="hidden md:block">→</span>
            <span className="font-semibold">Praxiym manages knowledge</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
