import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@anbuselvan.online",
      action: "mailto:contact@anbuselvan.online"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9342081845",
      action: "tel:+919342081845"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ramanathapuram, Tamil Nadu, India",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "@Anbuselvan-M",
      url: "https://github.com/Anbuselvan-M"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "Anbu Selvan M",
      url: "https://www.linkedin.com/in/anbu-selvan-m-3453112b5/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="bg-text-gradient bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities, projects, or just have a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{info.title}</p>
                            {info.action ? (
                              <a 
                                href={info.action}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Connect With Me
                </h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="bg-card-gradient border-border hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <social.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{social.title}</p>
                              <p className="text-muted-foreground">{social.username}</p>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(social.url, '_blank')}
                            className="border-primary hover:bg-primary/10"
                          >
                            Visit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card-gradient border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
                  <CardDescription>
                    I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">First Name</label>
                        <Input 
                          placeholder="John" 
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Last Name</label>
                        <Input 
                          placeholder="Doe" 
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <Input 
                        placeholder="Project Collaboration" 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project or just say hello..." 
                        className="bg-background border-border focus:border-primary min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent-gradient hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;