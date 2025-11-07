import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { category: "Frontend", skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", skills: ["Node.js", "Python", "Java", "Express.js", "RESTful APIs"] },
    { category: "Database", skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
    { category: "Tools & Other", skills: ["Git", "GitHub", "VS Code", "Linux", "Docker", "AWS"] }
  ];

  const nonTechnicalSkills = [
    { icon: Brain, title: "Problem Solving", description: "Analytical thinking and creative solution finding" },
    { icon: Users, title: "Team Collaboration", description: "Effective communication and teamwork" },
    { icon: Lightbulb, title: "Innovation", description: "Creative thinking and continuous learning" },
    { icon: Code, title: "Project Management", description: "Organizing and delivering projects efficiently" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Non-Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonTechnicalSkills.map((skill, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;