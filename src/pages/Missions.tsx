import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavigationBar } from '@/components/NavigationBar';
import { 
  ArrowLeft, 
  Target,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const missions = [
  {
    id: "M-001",
    title: "Operation: Infinity Storm",
    description: "Prevent Thanos from acquiring the remaining Infinity Stones.",
    status: "Active",
    priority: "Critical",
    assignedTeam: ["Iron Man", "Captain America", "Thor", "Hulk"],
    location: "Titan & Earth",
    timeRemaining: "72 hours",
    completion: 65,
    threats: ["Thanos", "Black Order", "Chitauri Army"]
  },
  {
    id: "M-002", 
    title: "Multiverse Breach Containment",
    description: "Seal dimensional rifts appearing across New York City.",
    status: "In Progress",
    priority: "High",
    assignedTeam: ["Doctor Strange", "Spider-Man", "Scarlet Witch"],
    location: "New York City",
    timeRemaining: "24 hours",
    completion: 45,
    threats: ["Variants", "Dimensional Parasites"]
  },
  {
    id: "M-003",
    title: "Hydra Facility Infiltration",
    description: "Retrieve stolen Vibranium technology from secret Hydra base.",
    status: "Completed",
    priority: "Medium",
    assignedTeam: ["Black Widow", "Falcon", "Winter Soldier"],
    location: "Sokovia",
    timeRemaining: "Completed",
    completion: 100,
    threats: ["Hydra Agents", "Enhanced Soldiers"]
  },
  {
    id: "M-004",
    title: "Cosmic Entity Negotiation",
    description: "Establish peaceful contact with the Living Tribunal.",
    status: "Pending",
    priority: "Low",
    assignedTeam: ["Silver Surfer", "Doctor Strange"],
    location: "Cosmic Plane",
    timeRemaining: "Indefinite",
    completion: 10,
    threats: ["Cosmic Entities", "Reality Distortion"]
  },
  {
    id: "M-005",
    title: "Time Paradox Resolution",
    description: "Fix timeline disruptions caused by time travel incidents.",
    status: "Active",
    priority: "Critical",
    assignedTeam: ["Doctor Strange", "Ancient One", "Kang"],
    location: "Multiple Timelines",
    timeRemaining: "48 hours",
    completion: 30,
    threats: ["Timeline Collapse", "Temporal Anomalies"]
  },
  {
    id: "M-006",
    title: "Symbiote Outbreak Control",
    description: "Contain and neutralize escaped symbiote specimens.",
    status: "Failed",
    priority: "High",
    assignedTeam: ["Spider-Man", "Venom", "Anti-Venom"],
    location: "San Francisco",
    timeRemaining: "Expired",
    completion: 25,
    threats: ["Carnage", "Symbiote Horde"]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Active': return <Target className="w-4 h-4" />;
    case 'In Progress': return <Clock className="w-4 h-4" />;
    case 'Completed': return <CheckCircle className="w-4 h-4" />;
    case 'Failed': return <XCircle className="w-4 h-4" />;
    case 'Pending': return <AlertTriangle className="w-4 h-4" />;
    default: return <Target className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'text-blue-400 bg-blue-400/20';
    case 'In Progress': return 'text-yellow-400 bg-yellow-400/20';
    case 'Completed': return 'text-green-400 bg-green-400/20';
    case 'Failed': return 'text-red-400 bg-red-400/20';
    case 'Pending': return 'text-gray-400 bg-gray-400/20';
    default: return 'text-primary bg-primary/20';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Critical': return 'text-red-400 bg-red-400/20';
    case 'High': return 'text-orange-400 bg-orange-400/20';
    case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
    case 'Low': return 'text-green-400 bg-green-400/20';
    default: return 'text-primary bg-primary/20';
  }
};

const Missions = () => {
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
              <span className="text-gradient-marvel">ACTIVE</span>{' '}
              <span className="text-gradient-hero">MISSIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical operations protecting Earth and the universe from cosmic threats and dimensional chaos.
            </p>
          </div>

          {/* Mission Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Active Missions", value: "3", color: "text-blue-400" },
              { label: "Heroes Deployed", value: "15", color: "text-green-400" },
              { label: "Success Rate", value: "85%", color: "text-yellow-400" },
              { label: "Threat Level", value: "High", color: "text-red-400" }
            ].map((stat, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            {missions.map((mission, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:shadow-marvel"
              >
                <div className="absolute inset-0 bg-gradient-marvel opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="relative z-10 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="text-3xl font-black text-muted-foreground mr-4">
                        {mission.id}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gradient-marvel mb-1">
                          {mission.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(mission.status)}`}>
                        {getStatusIcon(mission.status)}
                        <span className="ml-2">{mission.status}</span>
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getPriorityColor(mission.priority)}`}>
                        {mission.priority}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Assigned Team
                      </h4>
                      <div className="space-y-1">
                        {mission.assignedTeam.map((hero, idx) => (
                          <span key={idx} className="inline-block bg-muted/50 text-muted-foreground px-2 py-1 rounded text-sm mr-1 mb-1">
                            {hero}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground text-sm">{mission.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Time Remaining</h4>
                      <p className="text-muted-foreground text-sm font-mono">{mission.timeRemaining}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Progress</h4>
                      <div className="flex items-center">
                        <div className="flex-1 bg-muted rounded-full h-2 mr-3">
                          <div 
                            className="bg-gradient-marvel h-2 rounded-full transition-all duration-500"
                            style={{ width: `${mission.completion}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-primary">{mission.completion}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Known Threats:</h4>
                      <div className="flex flex-wrap gap-1">
                        {mission.threats.map((threat, idx) => (
                          <span key={idx} className="inline-block bg-destructive/20 text-destructive px-2 py-1 rounded text-sm">
                            {threat}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="btn-marvel mt-4 md:mt-0 group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/powers')}
            >
              <Target className="w-5 h-5 mr-2" />
              Study Hero Powers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;