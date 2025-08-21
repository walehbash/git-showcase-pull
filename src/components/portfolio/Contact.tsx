import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@flixpin.com",
      href: "mailto:hello@flixpin.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Available Globally",
      href: null
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/walehbash"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/walehbash"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Let's Work Together
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm available for new opportunities and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                I'm always excited to discuss new opportunities, creative projects, or potential collaborations.
              </p>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="outline" asChild className="w-full justify-start">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="ml-3">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent" asChild>
                <a href="mailto:hello@flixpin.com">
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            © 2024 Akanmu Bashir Olawale. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;