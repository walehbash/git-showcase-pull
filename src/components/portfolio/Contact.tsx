import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "bashirakanmu@gmail.com",
      href: "mailto:bashirakanmu@gmail.com"
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
      value: "09029100965",
      href: "tel:+2349029100965"
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
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/2349029100965"
    },
    {
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>,
      label: "Facebook",
      href: "https://facebook.com/bvsh__9"
    },
    {
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
      </svg>,
      label: "Instagram",
      href: "https://instagram.com/bvsh__9"
    }
  ];

  const handleEmailClick = () => {
    window.open('mailto:bashirakanmu@gmail.com', '_blank');
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleStartConversation = () => {
    window.open('mailto:bashirakanmu@gmail.com?subject=Project Inquiry', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2349029100965?text=Hi! I would like to discuss a project with you.', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30 font-medium">
            <span className="italic">Let's Work Together</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your <span className="italic text-primary font-semibold">next project to life</span>? I'm available for new opportunities and <span className="italic">collaborations</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground italic">Contact Information</CardTitle>
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
                        className="text-foreground hover:text-primary transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          if (info.href) {
                            window.open(info.href, '_blank');
                          }
                        }}
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

          <Card className="hover:shadow-xl transition-all duration-300 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground italic">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground/70 leading-relaxed">
                I'm always excited to discuss <span className="italic text-primary">new opportunities</span>, creative projects, or potential collaborations.
              </p>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="w-full justify-start cursor-pointer hover:bg-primary/10 hover:border-primary transition-all duration-200"
                    onClick={() => handleSocialClick(social.href)}
                  >
                    {social.icon}
                    <span className="ml-3">{social.label}</span>
                  </Button>
                ))}
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 py-3 font-semibold cursor-pointer"
                onClick={handleStartConversation}
              >
                <span className="italic">Start a Conversation</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Buttons */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Quick Contact</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with us on WhatsApp
            </Button>
            
            <Button 
              onClick={handleEmailClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © 2024 Bashir Olawale. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;