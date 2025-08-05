import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/NavigationBar';
import { 
  ArrowLeft, 
  Globe,
  Star,
  Sparkles,
  Shield,
  ArrowRight,
  Map
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const universes = [
  {
    name: "Earth-616",
    designation: "Prime Universe",
    icon: Globe,
    description: "The main Marvel Comics continuity where most stories take place.",
    status: "Active",
    keyEvents: ["Civil War", "Infinity War", "Secret Wars"],
    heroes: 150,
    threats: "Moderate"
  },
  {
    name: "Earth-1610",
    designation: "Ultimate Universe",
    icon: Star,
    description: "Modernized versions of classic Marvel characters.",
    status: "Destroyed/Merged",
    keyEvents: ["Ultimatum", "Ultimate End"],
    heroes: 75,
    threats: "High"
  },
  {
    name: "Earth-199999",
    designation: "Marvel Cinematic Universe",
    icon: Shield,
    description: "The movie universe where the Avengers assembled on screen.",
    status: "Active",
    keyEvents: ["Battle of New York", "Infinity Saga", "Multiverse Saga"],
    heroes: 30,
    threats: "Extreme"
  },
  {
    name: "Earth-65",
    designation: "Spider-Gwen Universe",
    icon: Sparkles,
    description: "Universe where Gwen Stacy became Spider-Woman.",
    status: "Active",
    keyEvents: ["Spider-Verse", "Web Warriors"],
    heroes: 25,
    threats: "Moderate"
  },
  {
    name: "Earth-928",
    designation: "Spider-Man 2099",
    icon: Star,
    description: "Futuristic universe in the year 2099.",
    status: "Active",
    keyEvents: ["Corporate Wars", "Future Imperfect"],
    heroes: 40,
    threats: "High"
  },
  {
    name: "Earth-X",
    designation: "Dystopian Future",
    icon: Globe,
    description: "Dark future where humanity evolved beyond recognition.",
    status: "Contained",
    keyEvents: ["Earth X Trilogy"],
    heroes: 20,
    threats: "Extreme"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'text-green-400 bg-green-400/20';
    case 'Destroyed/Merged': return 'text-orange-400 bg-orange-400/20';
    case 'Contained': return 'text-yellow-400 bg-yellow-400/20';
    default: return 'text-primary bg-primary/20';
  }
};

const getThreatColor = (level: string) => {
  switch (level) {
    case 'Moderate': return 'text-yellow-400';
    case 'High': return 'text-orange-400';
    case 'Extreme': return 'text-red-400';
    default: return 'text-green-400';
  }
};

const Universe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <NavigationBar />
      
      <div className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mr-6 hover:text-primary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-gradient-marvel">MARVEL</span>{' '}
              <span className="text-gradient-hero">MULTIVERSE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore infinite realities across the Marvel Multiverse, each with its own heroes, villains, and cosmic events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {universes.map((universe, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700 hover:scale-105 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-marvel opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <universe.icon className="w-12 h-12 text-primary glow-primary group-hover:animate-pulse" />
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(universe.status)}`}>
                      {universe.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gradient-marvel">
                    {universe.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-1 font-semibold">
                    {universe.designation}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {universe.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-muted-foreground">Heroes</div>
                      <div className="text-foreground font-bold">{universe.heroes}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Threat Level</div>
                      <div className={`font-bold ${getThreatColor(universe.threats)}`}>
                        {universe.threats}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Events:</h4>
                    <div className="space-y-1">
                      {universe.keyEvents.map((event, idx) => (
                        <span key={idx} className="inline-block bg-muted/50 text-muted-foreground px-2 py-1 rounded text-xs mr-1 mb-1">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="btn-marvel w-full group/btn">
                    <Map className="w-4 h-4 mr-2" />
                    Explore Universe
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Multiverse Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Known Universes", value: "∞", icon: Globe },
              { label: "Active Heroes", value: "500+", icon: Shield },
              { label: "Cosmic Threats", value: "25", icon: Star },
              { label: "Multiverse Events", value: "12", icon: Sparkles }
            ].map((stat, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 p-6 text-center hover:bg-card/50 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="btn-hero text-xl px-12 py-6"
              onClick={() => navigate('/heroes')}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Meet the Heroes
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;