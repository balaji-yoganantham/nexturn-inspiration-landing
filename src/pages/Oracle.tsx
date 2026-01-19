import { ArrowLeft, Database, Server, Shield, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Oracle = () => {
  const services = [
    {
      icon: Database,
      title: "Database Management",
      description: "Expert Oracle Database administration, optimization, and migration services.",
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Design and implement robust Oracle Cloud Infrastructure solutions.",
    },
    {
      icon: Layers,
      title: "Enterprise Applications",
      description: "Deploy and customize Oracle ERP, HCM, and SCM applications.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure data security and regulatory compliance across your Oracle ecosystem.",
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
                Oracle Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Enterprise-grade performance with comprehensive Oracle solutions including cloud 
                infrastructure, enterprise applications, and database management services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Talk to Expert
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                alt="Oracle Solutions"
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
              Complete Oracle Ecosystem Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From database to cloud, we deliver end-to-end Oracle solutions for enterprise success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-500" />
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
              Power Your Enterprise with Oracle
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's build a robust Oracle infrastructure that scales with your business.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Oracle;
