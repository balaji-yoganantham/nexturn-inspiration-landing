import { ArrowLeft, Workflow, Zap, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ServiceNow = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline and automate complex business processes across your organization.",
    },
    {
      icon: Zap,
      title: "IT Service Management",
      description: "Transform IT operations with intelligent service management solutions.",
    },
    {
      icon: Users,
      title: "Employee Experience",
      description: "Create seamless employee experiences from onboarding to offboarding.",
    },
    {
      icon: Settings,
      title: "Custom Applications",
      description: "Build custom workflow applications tailored to your unique needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                ServiceNow Implementation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline workflows at scale. Transform your business operations with intelligent 
                automation, service management, and enterprise workflow solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Request Demo
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" 
                alt="ServiceNow Implementation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ServiceNow Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              From implementation to optimization, we help you maximize the value of ServiceNow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Automate. Streamline. Transform.
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's optimize your workflows and enhance productivity with ServiceNow.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceNow;
