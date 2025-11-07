import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Heart, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, background, and what drives me
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Computer Science Engineering Student
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated Computer Science Engineering student with a passion for 
                  technology and innovation. Currently pursuing my degree, I'm constantly 
                  learning and exploring new technologies to solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in tech started with curiosity about how software works, 
                  and has evolved into a deep appreciation for clean code, user experience, 
                  and the power of technology to make a positive impact.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Computer Science Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Full-Stack Development Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Problem Solving Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Right side - Info cards */}
            <div className="grid gap-6">
              <Card className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personal Info</h4>
                      <p className="text-sm text-muted-foreground">Age: 21 | Location: Ramanathapuram</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-sm text-muted-foreground">BE CSE | Expected 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Interests</h4>
                      <p className="text-sm text-muted-foreground">Web-Dev, AI/ML, Open Source</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;