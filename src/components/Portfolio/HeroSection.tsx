import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  Anbu Selvan M
                </h1>
                <h2 className="text-2xl lg:text-3xl text-foreground font-light">
                  Computer Science Engineering Student
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about creating innovative solutions through code.
                Exploring the intersection of technology and creativity to build 
                meaningful digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-accent-gradient hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('https://github.com/Anbuselvan-M', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/anbu-selvan-m-3453112b5/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="/images/b9f24746-4fea-4300-90fc-d18a1e716e85.png"
                alt="Professional headshot"
                className="relative w-80 h-80 object-cover object-top rounded-full shadow-elegant border-4 border-primary/20 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;