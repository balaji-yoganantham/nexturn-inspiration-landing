import { ArrowLeft, Cloud, Zap, Shield, TrendingUp, CheckCircle2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CloudEngineering = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Design and build scalable, resilient applications using modern cloud-native principles and microservices architecture.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance, cost-efficiency, and reliability at scale.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and maintain compliance with industry standards and regulations.",
    },
    {
      icon: TrendingUp,
      title: "Auto-Scaling Solutions",
      description: "Leverage intelligent auto-scaling to handle traffic spikes and optimize resource utilization automatically.",
    },
  ];

  const benefits = [
    "Reduced infrastructure costs by up to 40%",
    "99.99% uptime SLA guarantee",
    "Faster time-to-market with CI/CD automation",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Seamless migration from legacy systems",
  ];

  const platforms = [
    { name: "AWS", logo: "☁️" },
    { name: "Azure", logo: "🔷" },
    { name: "Google Cloud", logo: "🌐" },
    { name: "Kubernetes", logo: "⎈" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Cloud Engineering Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Accelerate your digital evolution with AI-driven cloud-native solutions. 
                We engineer resilient architectures that scale with your business and drive innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                  alt="Cloud Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to implementation, we provide end-to-end cloud engineering services
              tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Our Cloud Engineering Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine deep technical expertise with industry best practices to deliver 
                cloud solutions that drive real business value.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Platform Expertise
              </h3>
              <p className="text-muted-foreground mb-8">
                We work with all major cloud platforms to deliver the best solution for your needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {platforms.map((platform) => (
                  <div key={platform.name} className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{platform.logo}</div>
                    <p className="font-semibold text-foreground">{platform.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how our cloud engineering services can accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudEngineering;
