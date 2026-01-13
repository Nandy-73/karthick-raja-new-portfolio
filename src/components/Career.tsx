import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, MapPin, X, ChevronRight } from "lucide-react";

const careerPath = [
  {
    role: "R&D and Production Manager",
    company: "Borgen Industries",
    location: "Morocco",
    period: "2021 – Present",
    type: "current",
    color: "primary",
    highlights: [
      "Lead end-to-end R&D and manufacturing operations",
      "QUALICOAT certification achievement",
      "40% market capture in architectural segment",
      "Team leadership and facility management",
    ],
    fullDescription: "Spearheading the complete R&D and production operations for powder coating manufacturing. Successfully achieved QUALICOAT certification, capturing 40% of the architectural market segment. Managing cross-functional teams and overseeing facility operations with focus on continuous improvement and quality excellence.",
  },
  {
    role: "R&D Chemist",
    company: "National Paints Factories Co. Ltd.",
    location: "Sharjah, UAE",
    period: "2019 – 2021",
    type: "past",
    color: "secondary",
    highlights: [
      "FBE coating development for Oil & Gas",
      "Customer technical support and training",
      "Quality system implementation",
    ],
    fullDescription: "Developed specialized FBE (Fusion Bonded Epoxy) coatings for Oil & Gas pipeline applications. Provided technical support to key customers including SOFRINOR and GARMCO. Implemented robust quality systems and conducted training programs for production teams.",
  },
  {
    role: "R&D Executive",
    company: "Southfield Paints Limited",
    location: "Karnataka, India",
    period: "2017 – 2019",
    type: "past",
    color: "accent",
    highlights: [
      "Formulation mastery across coating types",
      "Raw material optimization",
      "Production process design",
    ],
    fullDescription: "Mastered formulation development across multiple coating systems including epoxy, polyester, and hybrid technologies. Optimized raw material usage resulting in significant cost savings. Designed and implemented efficient production processes.",
  },
  {
    role: "R&D and Production Engineer",
    company: "AL-Afdal Powder Paints",
    location: "Riyadh, Saudi Arabia",
    period: "2016 – 2017",
    type: "past",
    color: "quaternary",
    highlights: [
      "Manufacturing operations",
      "Quality control systems",
    ],
    fullDescription: "Managed day-to-day manufacturing operations and established quality control protocols. Gained hands-on experience in powder coating production across various applications.",
  },
  {
    role: "QC Chemist Trainee",
    company: "Kansai Nerolac Paints Ltd.",
    location: "Tamil Nadu, India",
    period: "2015 – 2016",
    type: "past",
    color: "tertiary",
    highlights: [
      "Foundation in powder coating technology",
      "Quality testing protocols",
    ],
    fullDescription: "Built foundational knowledge in powder coating technology at one of India's leading paint manufacturers. Learned industry-standard quality testing protocols and laboratory procedures.",
  },
];

const education = [
  {
    degree: "B.Tech Chemical Engineering",
    institution: "Anna University",
    year: "2015",
  },
  {
    degree: "Diploma in Industrial Safety",
    institution: "Annamalai University",
    year: "2015",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    text: "text-primary",
    border: "border-primary/30",
    glow: "shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]",
    gradient: "from-primary to-glow",
  },
  secondary: {
    bg: "bg-glow-secondary",
    text: "text-glow-secondary",
    border: "border-glow-secondary/30",
    glow: "shadow-[0_0_30px_-5px_hsl(var(--glow-secondary)/0.5)]",
    gradient: "from-glow-secondary to-primary",
  },
  accent: {
    bg: "bg-accent",
    text: "text-accent",
    border: "border-accent/30",
    glow: "shadow-[0_0_30px_-5px_hsl(var(--accent)/0.5)]",
    gradient: "from-accent to-glow-secondary",
  },
  tertiary: {
    bg: "bg-glow-tertiary",
    text: "text-glow-tertiary",
    border: "border-glow-tertiary/30",
    glow: "shadow-[0_0_30px_-5px_hsl(var(--glow-tertiary)/0.5)]",
    gradient: "from-glow-tertiary to-accent",
  },
  quaternary: {
    bg: "bg-glow-quaternary",
    text: "text-glow-quaternary",
    border: "border-glow-quaternary/30",
    glow: "shadow-[0_0_30px_-5px_hsl(var(--glow-quaternary)/0.5)]",
    gradient: "from-glow-quaternary to-glow-tertiary",
  },
};

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <section id="career" className="py-24 md:py-32 bg-charcoal relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Colorful gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-glow-secondary/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-glow-tertiary/10 rounded-full blur-[70px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-glow-secondary text-sm font-medium uppercase tracking-widest mb-4 block">
            Career Progression
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Journey of{" "}
            <span className="text-gradient-rainbow">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Progressive career across India, Saudi Arabia, UAE, and Morocco, 
            advancing from technical foundations to strategic leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line - Gradient */}
              <div className="absolute left-[23px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-glow-secondary to-glow-tertiary rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {careerPath.map((item, index) => {
                  const colors = colorClasses[item.color as keyof typeof colorClasses];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="relative pl-14"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          item.type === "current" 
                            ? `${colors.bg} ${colors.glow}` 
                            : `bg-secondary border-2 ${colors.border} hover:${colors.bg}`
                        }`}
                        onClick={() => setSelectedJob(index)}
                      >
                        <Briefcase className={`w-5 h-5 ${
                          item.type === "current" ? "text-primary-foreground" : colors.text
                        }`} />
                      </motion.div>

                      {/* Content Card - Pop on Hover */}
                      <motion.div
                        whileHover={{ 
                          scale: 1.02, 
                          y: -8,
                          transition: { duration: 0.3 }
                        }}
                        onClick={() => setSelectedJob(index)}
                        className={`card-pop p-6 cursor-pointer ${item.type === "current" ? colors.border : ""} hover:${colors.glow}`}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-display font-semibold text-foreground">
                              {item.role}
                            </h3>
                            <p className={`font-medium ${colors.text}`}>{item.company}</p>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>

                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div className={`flex items-center gap-1 mt-4 text-sm ${colors.text} opacity-60`}>
                          <span>Click for details</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Education & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-pop card-pop-secondary p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-glow-secondary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-glow-secondary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <span className="text-xs text-glow-secondary">{item.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-pop card-pop-accent p-6"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Tamil", "Hindi", "Malayalam", "Kannada"].map((lang, i) => {
                  const colors = ["bg-primary/20 text-primary", "bg-glow-secondary/20 text-glow-secondary", "bg-accent/20 text-accent", "bg-glow-tertiary/20 text-glow-tertiary", "bg-glow-quaternary/20 text-glow-quaternary"];
                  return (
                    <span key={lang} className={`px-3 py-1.5 ${colors[i]} text-sm rounded-full`}>
                      {lang}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-4">French & German (Basic)</p>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-pop p-6 border-gradient"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">At a Glance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Experience</span>
                  <span className="text-primary font-medium">9+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Countries Worked</span>
                  <span className="text-glow-secondary font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="text-glow-tertiary font-medium">R&D Manager</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal for Job Details */}
      {selectedJob !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-lg w-full bg-card border border-border rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Content */}
            <div className={`w-12 h-12 rounded-xl ${colorClasses[careerPath[selectedJob].color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4`}>
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              {careerPath[selectedJob].role}
            </h3>
            <p className={`text-lg font-medium ${colorClasses[careerPath[selectedJob].color as keyof typeof colorClasses].text} mb-2`}>
              {careerPath[selectedJob].company}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {careerPath[selectedJob].location}
              </span>
              <span>{careerPath[selectedJob].period}</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {careerPath[selectedJob].fullDescription}
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wide">Key Achievements</h4>
              {careerPath[selectedJob].highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[careerPath[selectedJob].color as keyof typeof colorClasses].bg} mt-2 flex-shrink-0`} />
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Career;
