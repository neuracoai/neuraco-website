import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying Praxiym with your team",
    features: [
      "Up to 3 users",
      "Chat & docs",
      "Basic graph view",
      "Limited AI queries (50/mo)",
      "Community support",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$15",
    period: "per user/month",
    description: "For growing teams that need the full power",
    features: [
      "Unlimited users",
      "Tasks & projects",
      "Full knowledge graph",
      "Unlimited AI agents",
      "Vector search",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Custom AI agents",
      "On-premise deployment",
      "SSO & SAML",
      "Advanced security",
      "Dedicated CSM",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 border-t-2 border-border bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 border-2 border-border text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Simple pricing, powerful teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No surprises, no hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 border-2 ${
                plan.featured ? "border-foreground bg-background" : "border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs uppercase tracking-widest">
                  Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "heroOutline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
