import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "karthickraja173@gmail.com",
    href: "mailto:karthickraja173@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 665 820 137",
    href: "tel:+212665820137",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/karthick-raja-9003440043",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Morocco",
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's Discuss Your{" "}
              <span className="text-gradient">Next Project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Open to discussing technical consultancy, R&D leadership opportunities, 
              or strategic partnerships in industrial coatings.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card-industrial p-6 flex flex-col items-center hover-lift group block h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground font-medium flex items-center gap-1">
                      {item.value}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                ) : (
                  <div className="card-industrial p-6 flex flex-col items-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground font-medium">{item.value}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="mailto:karthickraja173@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity glow"
            >
              <Mail className="w-5 h-5" />
              Send a Message
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
