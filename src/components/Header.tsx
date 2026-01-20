import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Cloud", href: "#cloud" },
  { label: "Data & AI", href: "#data-ai" },
  { label: "Enterprise Platforms", href: "#enterprise" },
  { label: "Solutions", href: "#solutions" },
  { label: "Careers", href: "#careers" },
  { label: "About Us", href: "#about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="NexTurn Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="ml-2 text-xl font-semibold text-foreground tracking-tight">
                NexTurn
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;