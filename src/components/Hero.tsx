import { motion } from "framer-motion";
import { ArrowDown, MapPin, Mail, Linkedin, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient Orbs - Multiple Colors */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-secondary/15 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-glow-tertiary/10 rounded-full blur-[80px] animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-glow-quaternary/10 rounded-full blur-[90px] animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1 flex justify-center lg:justify-start"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-glow-secondary to-glow-tertiary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background bg-card flex items-center justify-center">


                  {/* Uncomment and add actual image when available */}
                  <img
                    src="/Karthick_raja.jpeg"
                    alt="Karthick Raja"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-glow-secondary rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-primary-foreground">9+</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="lg:col-span-2">
              {/* Top Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 border border-glow-secondary/30 rounded-full text-sm text-secondary-foreground">
                  <span className="w-2 h-2 bg-glow-secondary rounded-full animate-pulse" />
                  Available for Technical Leadership Roles
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] mb-6"
              >
                <span className="text-foreground">Karthick</span>
                <br />
                <span className="text-gradient-rainbow">Raja</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span className="text-lg md:text-xl text-foreground font-medium">Powder Coating</span>
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-lg md:text-xl text-foreground font-medium">R&D</span>
                <span className="w-2 h-2 bg-glow-secondary rounded-full" />
                <span className="text-lg md:text-xl text-foreground font-medium">Production Leadership</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                Driving innovation in industrial coatings across{" "}
                <span className="text-primary">Oil & Gas</span>,{" "}
                <span className="text-glow-secondary">Automotive</span>, and{" "}
                <span className="text-glow-tertiary">Architectural</span> sectors with 9+ years of R&D excellence.
              </motion.p>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { value: "9+", label: "Years Experience", color: "from-primary to-glow" },
              { value: "40%", label: "Market Capture", color: "from-glow-secondary to-primary" },
              { value: "30%", label: "Efficiency Boost", color: "from-glow-tertiary to-glow-secondary" },
              { value: "5+", label: "Certifications", color: "from-glow-quaternary to-glow-tertiary" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-pop p-4 text-center cursor-pointer"
              >
                <div className={`text-3xl md:text-4xl font-display font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-10"
          >
            <a href="mailto:karthickraja173@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              karthickraja173@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/karthick-raja-9003440043" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-glow-secondary transition-colors">
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
