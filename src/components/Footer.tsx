const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="NexTurn Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-semibold text-foreground">
                NexTurn
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              Creating new value with AI-first innovation for enterprises worldwide.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#cloud" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Cloud Engineering
                </a>
              </li>
              <li>
                <a href="#data-ai" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Data & AI
                </a>
              </li>
              <li>
                <a href="#salesforce" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Salesforce
                </a>
              </li>
              <li>
                <a href="#oracle" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Oracle
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                hello@nexturn.com
              </li>
              <li className="text-muted-foreground text-sm">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 NexTurn. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;