import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    category: "Coating Systems",
    color: "primary",
    items: [
      "Epoxy & Epoxy Polyester",
      "Super Durable Polyester",
      "Fusion Bonded Epoxy (FBE)",
      "Architectural Powder Coatings",
      "Metallic & Textured Finishes",
      "Anti-corrosion Coatings",
    ],
  },
  {
    category: "Testing & Analysis",
    color: "secondary",
    items: [
      "Impedance Spectroscopy",
      "Salt Spray Testing",
      "QUV Weathering",
      "Adhesion Testing",
      "Abrasion Resistance",
      "Thermal Resistance",
    ],
  },
  {
    category: "Standards & Certifications",
    color: "accent",
    items: [
      "QUALICOAT (P-1940, P-2096)",
      "IATF 16949",
      "ISO 9001",
      "AS9100 (Aerospace)",
      "FBE Standards",
      "Industrial Safety",
    ],
  },
  {
    category: "Process & Systems",
    color: "quaternary",
    items: [
      "ORACLE ERP",
      "Production SOP Development",
      "Root Cause Analysis",
      "Process Optimization",
      "Quality Management Systems",
      "HSE Compliance",
    ],
  },
];

const industries = [
  { name: "Oil & Gas", description: "Pipeline protection, corrosion resistance", color: "primary" },
  { name: "Automotive", description: "OEM alloy wheels, durable finishes", color: "secondary" },
  { name: "Architectural", description: "Exterior facades, aluminum extrusions", color: "accent" },
  { name: "Gas Cylinders", description: "Protective coatings, safety compliance", color: "quaternary" },
  { name: "Industrial", description: "Heavy machinery, fabricated metals", color: "tertiary" },
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/15",
    text: "text-primary",
    border: "border-primary/30",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.3)]",
  },
  secondary: {
    bg: "bg-glow-secondary",
    bgLight: "bg-glow-secondary/15",
    text: "text-glow-secondary",
    border: "border-glow-secondary/30",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--glow-secondary)/0.3)]",
  },
  accent: {
    bg: "bg-accent",
    bgLight: "bg-accent/15",
    text: "text-accent",
    border: "border-accent/30",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--accent)/0.3)]",
  },
  tertiary: {
    bg: "bg-glow-tertiary",
    bgLight: "bg-glow-tertiary/15",
    text: "text-glow-tertiary",
    border: "border-glow-tertiary/30",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--glow-tertiary)/0.3)]",
  },
  quaternary: {
    bg: "bg-glow-quaternary",
    bgLight: "bg-glow-quaternary/15",
    text: "text-glow-quaternary",
    border: "border-glow-quaternary/30",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--glow-quaternary)/0.3)]",
  },
};

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 md:py-32 bg-charcoal relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Colorful gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-glow-secondary/10 rounded-full blur-[90px]" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Technical Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Deep Expertise in{" "}
            <span className="text-gradient-rainbow">Powder Coatings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive knowledge spanning formulation chemistry, application technology, 
            and quality management across diverse industrial sectors.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {expertiseAreas.map((area, index) => {
            const colors = colorClasses[area.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`card-pop p-6 cursor-pointer ${colors.glow}`}
              >
                <h3 className={`text-lg font-display font-semibold ${colors.text} mb-4 pb-4 border-b ${colors.border}`}>
                  {area.category}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-gradient">Industries Served</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => {
              const colors = colorClasses[industry.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`group relative px-6 py-4 ${colors.bgLight} border ${colors.border} rounded-xl cursor-pointer transition-all duration-300 ${colors.glow}`}
                >
                  <span className={`font-medium ${colors.text}`}>{industry.name}</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {industry.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
