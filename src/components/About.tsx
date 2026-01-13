import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beaker, Factory, Shield, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Beaker,
    title: "R&D Leadership",
    description: "Formulation development and innovation across epoxy, polyester, and specialty coatings.",
    color: "primary",
  },
  {
    icon: Factory,
    title: "Production Excellence",
    description: "Facility setup and operational optimization delivering measurable efficiency gains.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Quality Standards",
    description: "QUALICOAT, IATF, ISO, and AS9100 certification expertise and implementation.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Market Impact",
    description: "Proven track record capturing market share and delivering business growth.",
    color: "quaternary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/15",
    bgHover: "group-hover:bg-primary/25",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]",
  },
  secondary: {
    bg: "bg-glow-secondary/15",
    bgHover: "group-hover:bg-glow-secondary/25",
    text: "text-glow-secondary",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--glow-secondary)/0.4)]",
  },
  accent: {
    bg: "bg-accent/15",
    bgHover: "group-hover:bg-accent/25",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)]",
  },
  quaternary: {
    bg: "bg-glow-quaternary/15",
    bgHover: "group-hover:bg-glow-quaternary/25",
    text: "text-glow-quaternary",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(var(--glow-quaternary)/0.4)]",
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Colorful gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-glow-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-glow-secondary text-sm font-medium uppercase tracking-widest mb-4 block">
              Professional Summary
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building the Future of{" "}
              <span className="text-gradient-rainbow">Industrial Coatings</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Chemical engineer with deep expertise in powder coating formulation, 
                production management, and quality assurance. Specialized in developing 
                high-performance coatings for demanding industrial applications.
              </p>
              <p>
                From establishing greenfield manufacturing facilities to capturing 
                significant market share in competitive territories, my approach combines 
                technical precision with strategic business thinking.
              </p>
              <p>
                Core focus areas include <span className="text-primary">FBE coatings</span> for Oil & Gas pipelines, 
                <span className="text-glow-secondary"> architectural powder coatings</span> with QUALICOAT certification, and 
                <span className="text-accent"> automotive-grade finishes</span> meeting IATF requirements.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`card-pop p-6 group cursor-pointer ${colors.glow}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-4 transition-colors`}>
                    <item.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
