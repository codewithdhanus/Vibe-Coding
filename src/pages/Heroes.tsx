import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/NavigationBar';
import { 
  ArrowLeft, 
  Zap, 
  Shield, 
  Hammer, 
  Star,
  Eye,
  Gem
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const heroes = [
  {
    name: "Iron Man",
    realName: "Tony Stark",
    icon: Zap,
    power: "Arc Reactor Technology",
    description: "Genius, billionaire, playboy, philanthropist with advanced armor suit.",
    powerLevel: 95,
    gradient: "gradient-marvel"
  },
  {
    name: "Captain America",
    realName: "Steve Rogers",
    icon: Shield,
    power: "Super Soldier Serum",
    description: "Enhanced human with unbreakable vibranium shield.",
    powerLevel: 90,
    gradient: "gradient-hero"
  },
  {
    name: "Thor",
    realName: "Thor Odinson",
    icon: Hammer,
    power: "God of Thunder",
    description: "Asgardian prince wielding the mighty hammer Mjolnir.",
    powerLevel: 98,
    gradient: "gradient-space"
  },
  {
    name: "Doctor Strange",
    realName: "Stephen Strange",
    icon: Eye,
    power: "Mystic Arts",
    description: "Sorcerer Supreme mastering time and dimensional magic.",
    powerLevel: 96,
    gradient: "gradient-red-gold"
  },
  {
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    icon: Gem,
    power: "Chaos Magic",
    description: "Reality-altering powers from the Mind Stone.",
    powerLevel: 99,
    gradient: "gradient-marvel"
  },
  {
    name: "Captain Marvel",
    realName: "Carol Danvers",
    icon: Star,
    power: "Cosmic Energy",
    description: "Binary powers from Kree technology enhancement.",
    powerLevel: 97,
    gradient: "gradient-hero"
  }
];

const Heroes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
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
              <span className="text-gradient-marvel">MARVEL</span>{' '}
              <span className="text-gradient-hero">HEROES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the legendary heroes who protect our universe from cosmic threats and evil forces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroes.map((hero, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700 hover:scale-105 hover:shadow-marvel"
              >
                <div className={`absolute inset-0 bg-${hero.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <hero.icon className="w-12 h-12 text-primary glow-primary group-hover:animate-pulse" />
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Power Level</div>
                      <div className="text-2xl font-bold text-primary">{hero.powerLevel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gradient-marvel">
                    {hero.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-1 font-semibold">
                    {hero.realName}
                  </p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {hero.power}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {hero.description}
                  </p>
                  
                  {/* Power Level Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Power Level</span>
                      <span className="text-primary font-semibold">{hero.powerLevel}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-marvel h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${hero.powerLevel}%` }}
                      />
                    </div>
                  </div>
                  
                  <Button className="btn-marvel w-full">
                    View Hero Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/universe')}
            >
              <Star className="w-5 h-5 mr-2" />
              Explore the Universe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;