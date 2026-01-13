import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building2, Car, Cylinder, Award } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Morocco Manufacturing Facility",
    challenge: "Establish a greenfield powder coating manufacturing plant in a new market with local supply chain constraints.",
    action: "Led complete facility setup including equipment specification, process design, team recruitment, and supplier qualification.",
    result: "Achieved operational readiness ahead of schedule, enabling immediate production capacity and market entry.",
    tags: ["Facility Setup", "Team Building", "Process Design"],
    color: "primary",
  },
  {
    icon: Award,
    title: "40% Market Capture",
    challenge: "Enter the competitive Moroccan architectural coatings market dominated by established players.",
    action: "Developed QUALICOAT-certified products (P-1940 & P-2096), implemented aggressive quality positioning, and built distributor relationships.",
    result: "Captured 40% of architectural product market within 6 months, establishing brand as quality leader.",
    tags: ["Market Entry", "QUALICOAT", "Business Growth"],
    color: "secondary",
  },
  {
    icon: Cylinder,
    title: "SOFRINOR Gas Cylinder Project",
    challenge: "Meet stringent coating requirements for major gas cylinder manufacturer serving Total Gaz, Petrom Gaz, and other leading brands.",
    action: "Engineered custom powder formulation meeting durability, safety, and aesthetic specifications. Managed qualification testing and production scale-up.",
    result: "Secured multi-year supply agreement as approved vendor for Morocco's largest cylinder manufacturer.",
    tags: ["Oil & Gas", "Product Development", "OEM"],
    color: "accent",
  },
  {
    icon: Car,
    title: "DICASTEL Automotive Approval",
    challenge: "Develop automotive-grade coating meeting IATF requirements for premier alloy wheel manufacturer.",
    action: "Created new formulation addressing automotive durability standards. Led IATF certification process and customer qualification.",
    result: "Achieved product approval and IATF certification, opening automotive market segment.",
    tags: ["Automotive", "IATF", "New Product"],
    color: "quaternary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/15",
    text: "text-primary",
    border: "hover:border-primary/50",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.3)]",
    tag: "bg-primary/20 text-primary",
  },
  secondary: {
    bg: "bg-glow-secondary/15",
    text: "text-glow-secondary",
    border: "hover:border-glow-secondary/50",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--glow-secondary)/0.3)]",
    tag: "bg-glow-secondary/20 text-glow-secondary",
  },
  accent: {
    bg: "bg-accent/15",
    text: "text-accent",
    border: "hover:border-accent/50",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--accent)/0.3)]",
    tag: "bg-accent/20 text-accent",
  },
  quaternary: {
    bg: "bg-glow-quaternary/15",
    text: "text-glow-quaternary",
    border: "hover:border-glow-quaternary/50",
    glow: "hover:shadow-[0_25px_50px_-12px_hsl(var(--glow-quaternary)/0.3)]",
    tag: "bg-glow-quaternary/20 text-glow-quaternary",
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      {/* Colorful gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-glow-quaternary/10 rounded-full blur-[90px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projects &{" "}
            <span className="text-gradient-rainbow">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real-world impact through technical innovation and operational excellence.
            Each project represents a distinct challenge solved through systematic approach.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`card-pop p-8 group cursor-pointer ${colors.border} ${colors.glow}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.bg} group-hover:scale-110 transition-transform`}>
                    <project.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <ArrowUpRight className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Challenge - Action - Result */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                  </div>
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>Action</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.action}</p>
                  </div>
                  <div>
                    <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>Result</span>
                    <p className="text-sm text-foreground mt-1 font-medium">{project.result}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${colors.tag} text-xs rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
