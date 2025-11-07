import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      icon: Globe,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      icon: Smartphone,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-green-500/20 to-teal-600/20"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data, forecasts, and historical weather information using external APIs.",
      tech: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      icon: Database,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-orange-500/20 to-red-600/20"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: Globe,
      demoUrl: "#",
      githubUrl: "#",
      image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  {/* Project Icon/Image */}
                  <div className={`w-full h-48 rounded-lg ${project.image} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <project.icon className="h-16 w-16 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary hover:bg-primary/10"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
              className="bg-accent-gradient hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;