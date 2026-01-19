import { ArrowLeft, Brain, Database, LineChart, Sparkles, CheckCircle2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DataAI = () => {
  const services = [
    {
      icon: Database,
      title: "Data Platform Engineering",
      description: "Build modern, scalable data platforms that unify your data sources and enable real-time analytics.",
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Develop and deploy custom ML models that solve complex business problems and drive automation.",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with cutting-edge analytics and visualization tools.",
    },
    {
      icon: Sparkles,
      title: "AI Innovation Lab",
      description: "Experiment with emerging AI technologies including generative AI, NLP, and computer vision.",
    },
  ];

  const useCases = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors with 95%+ accuracy",
      impact: "40% reduction in operational costs",
    },
    {
      title: "Customer Intelligence",
      description: "Deep insights into customer behavior and preferences",
      impact: "3x increase in engagement",
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of repetitive business processes",
      impact: "60% time savings",
    },
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Apache Spark", "Snowflake", 
    "Databricks", "AWS SageMaker", "Azure ML", "BigQuery"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Innovation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Data & AI Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create a data-driven future with modern data platforms that power advanced analytics 
                and scalable machine learning, enabling AI innovations with measurable impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Book a Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80" 
                  alt="Data & AI Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">1000+</p>
                    <p className="text-sm text-muted-foreground">AI Models Deployed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              End-to-End Data & AI Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From data strategy to AI deployment, we help you unlock the full potential 
              of your data assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-all hover:scale-105 border-border group">
                <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real-World Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our Data & AI solutions drive measurable business outcomes across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {useCase.description}
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-primary font-semibold text-lg">
                    {useCase.impact}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                We leverage the latest tools and frameworks to build robust, scalable AI solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech) => (
                <div key={tech} className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:shadow-lg transition-all">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Proven Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We follow a structured approach to ensure successful AI implementation and measurable ROI.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Assessment", desc: "Analyze your data landscape and identify opportunities" },
                  { step: "02", title: "Strategy & Design", desc: "Create a roadmap aligned with business objectives" },
                  { step: "03", title: "Development & Training", desc: "Build and train models with your data" },
                  { step: "04", title: "Deployment & Monitoring", desc: "Launch solutions with continuous optimization" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Partner With Us?
              </h3>
              
              <div className="space-y-4">
                {[
                  "Industry-leading AI/ML expertise",
                  "Proven track record across sectors",
                  "End-to-end implementation support",
                  "Focus on business value and ROI",
                  "Ethical AI practices and compliance",
                  "Continuous innovation and updates",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Transform your business with data-driven insights and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAI;
