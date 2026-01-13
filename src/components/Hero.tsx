import { motion } from "framer-motion";
import { ArrowDown, MapPin, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow/10 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for Technical Leadership Roles
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8"
          >
            <span className="text-foreground">Karthick</span>
            <br />
            <span className="text-gradient">Raja</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="text-xl md:text-2xl text-foreground font-medium">Powder Coating</span>
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xl md:text-2xl text-foreground font-medium">R&D</span>
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xl md:text-2xl text-foreground font-medium">Production Leadership</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Driving innovation in industrial coatings across{" "}
            <span className="text-foreground">Oil & Gas</span>,{" "}
            <span className="text-foreground">Automotive</span>, and{" "}
            <span className="text-foreground">Architectural</span> sectors with 9+ years of R&D excellence.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { value: "9+", label: "Years Experience" },
              { value: "40%", label: "Market Capture" },
              { value: "30%", label: "Efficiency Boost" },
              { value: "5+", label: "Certifications" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <a href="mailto:karthickraja173@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              karthickraja173@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/karthick-raja-9003440043" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Morocco
            </span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
