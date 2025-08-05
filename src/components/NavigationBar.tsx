import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Heroes', href: '/heroes' },
    { label: 'Powers', href: '/powers' },
    { label: 'Universe', href: '/universe' },
    { label: 'Missions', href: '/missions' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-hero' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
            </div>
            <span className="text-2xl font-black text-gradient-marvel">MARVEL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-marvel group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hover:text-primary"
              onClick={() => navigate('/heroes')}
            >
              Join Avengers
            </Button>
            <Button 
              className="btn-marvel"
              onClick={() => navigate('/missions')}
            >
              <Shield className="w-4 h-4 mr-2" />
              Hero Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-300 font-semibold py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => { navigate('/heroes'); setIsOpen(false); }}
                >
                  Join Avengers
                </Button>
                <Button 
                  className="btn-marvel w-full"
                  onClick={() => { navigate('/missions'); setIsOpen(false); }}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Hero Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};