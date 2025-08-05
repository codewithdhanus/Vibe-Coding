import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Star, 
  Flame,
  ArrowRight 
} from 'lucide-react';
import portalBg from '@/assets/portal-bg.jpg';
import arcReactor from '@/assets/arc-reactor.jpg';

const features = [
  {
    icon: Zap,
    title: "Arc Reactor Technology",
    description: "Harness unlimited clean energy with Tony Stark's revolutionary arc reactor technology.",
    image: arcReactor,
    gradient: "gradient-iron",
    shadow: "shadow-iron"
  },
  {
    icon: Shield,
    title: "Vibranium Defense",
    description: "Wakandan technology meets modern innovation for unbreakable protection systems.",
    gradient: "gradient-wakanda",
    shadow: "shadow-wakanda"
  },
  {
    icon: Globe,
    title: "Multiverse Portal",
    description: "Doctor Strange's dimensional gateways connect infinite realities and possibilities.",
    image: portalBg,
    gradient: "gradient-arc",
    shadow: "shadow-portal"
  },
  {
    icon: Star,
    title: "Cosmic Power",
    description: "Channel the power of the infinity stones across space and time.",
    gradient: "gradient-space",
    shadow: "shadow-hero"
  },
  {
    icon: Flame,
    title: "Phoenix Force",
    description: "Unleash the cosmic force of creation and destruction itself.",
    gradient: "gradient-iron",
    shadow: "shadow-iron"
  },
  {
    icon: Sparkles,
    title: "Reality Manipulation",
    description: "Bend reality to your will with Scarlet Witch's chaos magic abilities.",
    gradient: "gradient-wakanda",
    shadow: "shadow-wakanda"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-space relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient-arc">HEROIC</span>{' '}
            <span className="text-gradient-iron">POWERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the extraordinary abilities that make our heroes legendary. 
            Each power represents the pinnacle of cosmic evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700 hover:scale-105 hover:${feature.shadow}`}
            >
              {/* Background Image */}
              {feature.image && (
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <div className="relative z-10 p-8">
                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-primary glow-primary group-hover:animate-pulse" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gradient-iron group-hover:text-gradient-arc transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-glow font-semibold"
                >
                  Explore Power
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Button className="btn-hero text-xl px-12 py-6">
            <Zap className="w-6 h-6 mr-3" />
            Assemble Your Team
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};