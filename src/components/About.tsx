import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beaker, Factory, Shield, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Beaker,
    title: "R&D Leadership",
    description: "Formulation development and innovation across epoxy, polyester, and specialty coatings.",
  },
  {
    icon: Factory,
    title: "Production Excellence",
    description: "Facility setup and operational optimization delivering measurable efficiency gains.",
  },
  {
    icon: Shield,
    title: "Quality Standards",
    description: "QUALICOAT, IATF, ISO, and AS9100 certification expertise and implementation.",
  },
  {
    icon: TrendingUp,
    title: "Market Impact",
    description: "Proven track record capturing market share and delivering business growth.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Professional Summary
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Building the Future of{" "}
              <span className="text-gradient">Industrial Coatings</span>
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
                Core focus areas include FBE coatings for Oil & Gas pipelines, 
                architectural powder coatings with QUALICOAT certification, and 
                automotive-grade finishes meeting IATF requirements.
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
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-industrial p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
