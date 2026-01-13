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
    accent: "primary",
  },
  {
    icon: Award,
    title: "40% Market Capture",
    challenge: "Enter the competitive Moroccan architectural coatings market dominated by established players.",
    action: "Developed QUALICOAT-certified products (P-1940 & P-2096), implemented aggressive quality positioning, and built distributor relationships.",
    result: "Captured 40% of architectural product market within 6 months, establishing brand as quality leader.",
    tags: ["Market Entry", "QUALICOAT", "Business Growth"],
    accent: "glow",
  },
  {
    icon: Cylinder,
    title: "SOFRINOR Gas Cylinder Project",
    challenge: "Meet stringent coating requirements for major gas cylinder manufacturer serving Total Gaz, Petrom Gaz, and other leading brands.",
    action: "Engineered custom powder formulation meeting durability, safety, and aesthetic specifications. Managed qualification testing and production scale-up.",
    result: "Secured multi-year supply agreement as approved vendor for Morocco's largest cylinder manufacturer.",
    tags: ["Oil & Gas", "Product Development", "OEM"],
    accent: "primary",
  },
  {
    icon: Car,
    title: "DICASTEL Automotive Approval",
    challenge: "Develop automotive-grade coating meeting IATF requirements for premier alloy wheel manufacturer.",
    action: "Created new formulation addressing automotive durability standards. Led IATF certification process and customer qualification.",
    result: "Achieved product approval and IATF certification, opening automotive market segment.",
    tags: ["Automotive", "IATF", "New Product"],
    accent: "glow",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projects &{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real-world impact through technical innovation and operational excellence.
            Each project represents a distinct challenge solved through systematic approach.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="card-industrial p-8 hover-lift group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  project.accent === "glow" ? "bg-glow/10" : "bg-primary/10"
                }`}>
                  <project.icon className={`w-7 h-7 ${
                    project.accent === "glow" ? "text-glow" : "text-primary"
                  }`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {project.title}
              </h3>

              {/* Challenge - Action - Result */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Challenge</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Action</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.action}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Result</span>
                  <p className="text-sm text-foreground mt-1 font-medium">{project.result}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
