import { ArrowLeft, Users, Workflow, Bot, Cloud, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Salesforce = () => {
  const services = [
    {
      icon: Users,
      title: "CRM Optimization",
      description: "Maximize your Salesforce investment with tailored CRM solutions that enhance customer relationships.",
    },
    {
      icon: Bot,
      title: "Einstein AI Integration",
      description: "Leverage AI-powered insights and automation to make smarter business decisions faster.",
    },
    {
      icon: Cloud,
      title: "Industry Cloud Solutions",
      description: "Deploy industry-specific solutions built on Salesforce's specialized cloud platforms.",
    },
    {
      icon: Workflow,
      title: "Data Cloud Integration",
      description: "Unify customer data across all touchpoints for a complete 360-degree view.",
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
                Salesforce Agentforce Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Maximize your CRM investment value. Leverage the Agentforce platform to build 
                solutions integrating core CRM, industry clouds, Einstein AI, and Data Cloud capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Salesforce Solutions"
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
              Comprehensive Salesforce Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From implementation to optimization, we help you get the most out of your Salesforce platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
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
              Transform Customer Relationships
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how our Salesforce expertise can drive growth and customer satisfaction.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Contact Our Salesforce Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Salesforce;
