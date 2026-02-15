const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "API"],
  Legal: ["Privacy", "Terms", "Security"],
};

export const Footer = () => {
  return (
    <footer className="border-t-2 border-border py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 p-6 border-2 border-border bg-card">
          <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest">Co-founders</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/cofounder-1"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Co-founder 1 LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/cofounder-2"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Co-founder 2 LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center">
                <span className="font-bold text-lg">N</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Praxiym</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The AI brain for remote teams.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Praxiym. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
