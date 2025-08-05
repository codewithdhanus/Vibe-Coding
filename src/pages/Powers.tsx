import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/NavigationBar';
import { 
  ArrowLeft, 
  Zap, 
  Shield, 
  Sparkles,
  Eye,
  Flame,
  Waves,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const powers = [
  {
    name: "Arc Reactor Technology",
    icon: Zap,
    category: "Technology",
    description: "Clean, unlimited energy source powering advanced armor systems.",
    users: ["Iron Man", "War Machine"],
    dangerLevel: "Medium",
    origin: "Tony Stark's Engineering",
    capabilities: [
      "Unlimited energy generation",
      "Repulsor beam technology", 
      "Flight stabilization",
      "Life support systems"
    ]
  },
  {
    name: "Super Soldier Serum",
    icon: Shield,
    category: "Enhancement",
    description: "Peak human physical and mental enhancement formula.",
    users: ["Captain America", "Winter Soldier"],
    dangerLevel: "Low",
    origin: "Dr. Abraham Erskine",
    capabilities: [
      "Enhanced strength & speed",
      "Accelerated healing",
      "Perfect reflexes",
      "Extended lifespan"
    ]
  },
  {
    name: "Mystic Arts",
    icon: Eye,
    category: "Magic",
    description: "Ancient sorcery manipulating time, space, and dimensions.",
    users: ["Doctor Strange", "Ancient One", "Wong"],
    dangerLevel: "Extreme",
    origin: "Kamar-Taj",
    capabilities: [
      "Dimensional portals",
      "Time manipulation",
      "Astral projection",
      "Reality alteration"
    ]
  },
  {
    name: "Chaos Magic",
    icon: Sparkles,
    category: "Cosmic",
    description: "Reality-warping powers from the Mind Stone enhancement.",
    users: ["Scarlet Witch"],
    dangerLevel: "Extreme",
    origin: "Mind Stone Experimentation",
    capabilities: [
      "Reality manipulation",
      "Hex bolts",
      "Telepathy",
      "Probability alteration"
    ]
  },
  {
    name: "Phoenix Force",
    icon: Flame,
    category: "Cosmic",
    description: "Cosmic entity of creation and destruction.",
    users: ["Jean Grey", "Rachel Summers"],
    dangerLevel: "Omega",
    origin: "Cosmic Entity",
    capabilities: [
      "Molecular manipulation",
      "Resurrection",
      "Cosmic awareness",
      "Unlimited power"
    ]
  },
  {
    name: "Hydrokinesis",
    icon: Waves,
    category: "Elemental",
    description: "Complete control over water and moisture.",
    users: ["Namor", "Aquaman"],
    dangerLevel: "High",
    origin: "Atlantean Genetics",
    capabilities: [
      "Water manipulation",
      "Underwater breathing",
      "Telepathic sea life control",
      "Tidal wave creation"
    ]
  }
];

const getDangerColor = (level: string) => {
  switch (level) {
    case 'Low': return 'text-green-400 bg-green-400/20';
    case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
    case 'High': return 'text-orange-400 bg-orange-400/20';
    case 'Extreme': return 'text-red-400 bg-red-400/20';
    case 'Omega': return 'text-purple-400 bg-purple-400/20';
    default: return 'text-primary bg-primary/20';
  }
};

const Powers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-space">
      <NavigationBar />
      
      <div className="pt-28 pb-20 px-6">
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
              <span className="text-gradient-marvel">SUPER</span>{' '}
              <span className="text-gradient-hero">POWERS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the extraordinary abilities that define our heroes and shape the Marvel Universe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {powers.map((power, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700 hover:scale-105 hover:shadow-marvel"
              >
                <div className="absolute inset-0 bg-gradient-marvel opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <power.icon className="w-12 h-12 text-primary glow-primary group-hover:animate-pulse mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gradient-marvel mb-1">
                          {power.name}
                        </h3>
                        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          {power.category}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDangerColor(power.dangerLevel)}`}>
                      {power.dangerLevel}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {power.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Known Users:</h4>
                      <div className="space-y-1">
                        {power.users.map((user, idx) => (
                          <span key={idx} className="inline-block bg-muted/50 text-muted-foreground px-2 py-1 rounded text-sm mr-2">
                            {user}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Origin:</h4>
                      <p className="text-muted-foreground text-sm">{power.origin}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Capabilities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {power.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="btn-marvel w-full group/btn">
                    Study Power
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/missions')}
            >
              <Zap className="w-5 h-5 mr-2" />
              View Active Missions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powers;