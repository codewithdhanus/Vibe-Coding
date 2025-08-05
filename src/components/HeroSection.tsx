import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Shield, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import marvelHeroBg from '@/assets/marvel-hero-bg.jpg';

export const HeroSection = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url(${marvelHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
        }}
      />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Portal Ring Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <div className="portal-ring"></div>
          <div className="portal-ring"></div>
          <div className="portal-ring"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <span className="text-gradient-marvel block mb-2">MARVEL</span>
            <span className="text-gradient-hero">UNIVERSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the cinematic magic where heroes rise, legends are born, 
            and the impossible becomes inevitable. Welcome to a universe beyond imagination.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
          <Button 
            className="btn-hero group"
            onClick={() => navigate('/universe')}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Enter the Multiverse
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            className="btn-marvel group"
            onClick={() => navigate('/heroes')}
          >
            <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Discover Heroes
          </Button>
        </div>

        {/* Power Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Zap, label: "Power Level", value: "9000+", color: "text-primary" },
            { icon: Shield, label: "Heroes United", value: "50+", color: "text-accent" },
            { icon: Sparkles, label: "Epic Moments", value: "∞", color: "text-secondary" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="float-animation bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 glow-primary`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};