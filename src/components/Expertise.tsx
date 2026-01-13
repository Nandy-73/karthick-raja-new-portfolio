import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  {
    category: "Coating Systems",
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
  { name: "Oil & Gas", description: "Pipeline protection, corrosion resistance" },
  { name: "Automotive", description: "OEM alloy wheels, durable finishes" },
  { name: "Architectural", description: "Exterior facades, aluminum extrusions" },
  { name: "Gas Cylinders", description: "Protective coatings, safety compliance" },
  { name: "Industrial", description: "Heavy machinery, fabricated metals" },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 md:py-32 bg-charcoal relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            <span className="text-gradient">Powder Coatings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive knowledge spanning formulation chemistry, application technology, 
            and quality management across diverse industrial sectors.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-industrial p-6"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 pb-4 border-b border-border">
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-8">Industries Served</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group relative px-6 py-4 border-gradient rounded-xl hover-lift cursor-default"
              >
                <span className="font-medium text-foreground">{industry.name}</span>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {industry.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
