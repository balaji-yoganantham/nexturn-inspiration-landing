import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Cloud Engineering",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    keyPrompt: "Accelerate your digital evolution",
    description:
      "AI-driven approach to building cloud-native solutions. We engineer resilient cloud architectures and develop scalable applications.",
    learnMoreUrl: "/cloud-engineering",
    tooltip: "Featured",
  },
  {
    title: "Data & AI Solutions",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    keyPrompt: "Create a data-driven future",
    description:
      "Build modern data platforms to power advanced analytics and scalable machine learning, enabling AI innovations with measurable impact.",
    learnMoreUrl: "/data-ai",
    tooltip: "Popular",
  },
  {
    title: "Salesforce Agentforce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    keyPrompt: "Maximize CRM investment value",
    description:
      "Leverage Agentforce platform to build solutions integrating core CRM, industry clouds, Einstein AI, and Data Cloud capabilities.",
    learnMoreUrl: "/salesforce",
  },
  {
    title: "Oracle Solutions",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    keyPrompt: "Enterprise-grade performance",
    description:
      "Comprehensive Oracle solutions including cloud infrastructure, enterprise applications, and database management services.",
    learnMoreUrl: "/oracle",
  },
  {
    title: "ServiceNow Implementation",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    keyPrompt: "Streamline workflows at scale",
    description:
      "Transform your business operations with intelligent automation, service management, and enterprise workflow solutions.",
    learnMoreUrl: "/servicenow",
    tooltip: "New",
  },
  {
    title: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    keyPrompt: "Future-proof your business",
    description:
      "End-to-end digital transformation services that modernize your infrastructure and accelerate innovation.",
    learnMoreUrl: "/digital-transformation",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we help enterprises transform and thrive with our
            comprehensive suite of AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;