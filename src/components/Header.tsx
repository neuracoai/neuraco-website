import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getAuthChangeEventName, isSupabaseAuthenticated } from "@/lib/integrations";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navItems = ["Features", "How it Works", "Pricing"];

  useEffect(() => {
    const syncAuthState = () => {
      setIsAuthenticated(isSupabaseAuthenticated());
    };

    syncAuthState();
    window.addEventListener("storage", syncAuthState);
    window.addEventListener(getAuthChangeEventName(), syncAuthState);

    return () => {
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener(getAuthChangeEventName(), syncAuthState);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 right-4 z-50 bg-background/80 backdrop-blur-md border-2 border-border rounded-lg"
    >
      <div className="px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center">
              <span className="font-bold text-lg">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Praxiym</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href={isAuthenticated ? "/settings" : "/login"}>
                {isAuthenticated ? "Settings" : "Log In"}
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#pricing">
                Get Access
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href={isAuthenticated ? "/settings" : "/login"} onClick={() => setIsOpen(false)}>
                    {isAuthenticated ? "Settings" : "Log In"}
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <a href="#pricing" onClick={() => setIsOpen(false)}>
                    Get Access
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
