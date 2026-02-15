import { Linkedin } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "API"],
  Legal: ["Privacy", "Terms", "Security"],
};

const coFounders = [
  {
    name: "Vedant Choudhary",
    role: "Co-founder",
    bio: "Student @ VIT Chennai",
    image: "/founders/vedant-choudhary.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-choudhary-8901122a6/",
  },
  {
    name: "Lohith Aditya Kolli",
    role: "Co-founder",
    bio: "Student @ VIT Chennai",
    image: "/founders/lohith-aditya-kolli.jpg",
    linkedin: "https://www.linkedin.com/in/lohith-aditya-kolli-92a24a200/",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t-2 border-border py-16">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h4 className="font-semibold mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            Co-founders
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {coFounders.map((founder) => (
              <article
                key={founder.name}
                className="border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-900/80 p-5 md:p-6 shadow-[0_0_60px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={founder.image}
                  alt={`${founder.name} profile`}
                  className="w-full h-72 object-cover mb-5"
                  onError={(event) => {
                    event.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h5 className="text-xl font-medium tracking-tight">{founder.name}</h5>
                  <span className="text-sm text-muted-foreground">{founder.role}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{founder.bio}</p>
                <div className="flex justify-end">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} LinkedIn`}
                    className="w-10 h-10 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
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
