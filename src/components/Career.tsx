import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const careerPath = [
  {
    role: "R&D and Production Manager",
    company: "Borgen Industries",
    location: "Morocco",
    period: "2021 – Present",
    type: "current",
    highlights: [
      "Lead end-to-end R&D and manufacturing operations",
      "QUALICOAT certification achievement",
      "40% market capture in architectural segment",
      "Team leadership and facility management",
    ],
  },
  {
    role: "R&D Chemist",
    company: "National Paints Factories Co. Ltd.",
    location: "Sharjah, UAE",
    period: "2019 – 2021",
    type: "past",
    highlights: [
      "FBE coating development for Oil & Gas",
      "Customer technical support and training",
      "Quality system implementation",
    ],
  },
  {
    role: "R&D Executive",
    company: "Southfield Paints Limited",
    location: "Karnataka, India",
    period: "2017 – 2019",
    type: "past",
    highlights: [
      "Formulation mastery across coating types",
      "Raw material optimization",
      "Production process design",
    ],
  },
  {
    role: "R&D and Production Engineer",
    company: "AL-Afdal Powder Paints",
    location: "Riyadh, Saudi Arabia",
    period: "2016 – 2017",
    type: "past",
    highlights: [
      "Manufacturing operations",
      "Quality control systems",
    ],
  },
  {
    role: "QC Chemist Trainee",
    company: "Kansai Nerolac Paints Ltd.",
    location: "Tamil Nadu, India",
    period: "2015 – 2016",
    type: "past",
    highlights: [
      "Foundation in powder coating technology",
      "Quality testing protocols",
    ],
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

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-24 md:py-32 bg-charcoal relative" ref={ref}>
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
            Career Progression
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Journey of{" "}
            <span className="text-gradient">Growth</span>
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
              {/* Timeline Line */}
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {careerPath.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-14"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === "current" 
                        ? "bg-primary glow" 
                        : "bg-secondary border border-border"
                    }`}>
                      <Briefcase className={`w-5 h-5 ${
                        item.type === "current" ? "text-primary-foreground" : "text-muted-foreground"
                      }`} />
                    </div>

                    {/* Content */}
                    <div className={`card-industrial p-6 ${item.type === "current" ? "border-primary/30" : ""}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-display font-semibold text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-primary font-medium">{item.company}</p>
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
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
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
            <div className="card-industrial p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <span className="text-xs text-primary">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card-industrial p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Tamil", "Hindi", "Malayalam", "Kannada"].map((lang) => (
                  <span key={lang} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">French & German (Basic)</p>
            </div>

            {/* Key Stats */}
            <div className="card-industrial p-6 border-gradient">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">At a Glance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Experience</span>
                  <span className="text-foreground font-medium">9+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Countries Worked</span>
                  <span className="text-foreground font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="text-foreground font-medium">R&D Manager</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Career;
