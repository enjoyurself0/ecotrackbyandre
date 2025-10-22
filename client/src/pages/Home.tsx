import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Trophy, Leaf, Droplet, Zap, Trash2 } from "lucide-react";
import FloatingLeaf from "@/components/FloatingLeaf";
import heroImage from "@assets/generated_images/Green_forest_hero_background_64759455.png";

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: "Track Your Impact",
      description: "Monitor your daily energy, water, and waste consumption with interactive charts and insights.",
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Climb the leaderboard and earn badges as you reduce your environmental footprint.",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Share tips, participate in challenges, and connect with eco-conscious individuals.",
    },
    {
      icon: Leaf,
      title: "Earn Rewards",
      description: "Unlock achievements and celebrate milestones on your sustainability journey.",
    },
  ];

  const steps = [
    { number: 1, title: "Sign Up", description: "Create your free account in seconds" },
    { number: 2, title: "Track Daily", description: "Log your energy, water, and waste usage" },
    { number: 3, title: "View Progress", description: "See your impact with visual analytics" },
    { number: 4, title: "Compete", description: "Climb the ranks and earn rewards" },
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <FloatingLeaf />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Track Your Sustainability Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Monitor your environmental impact, compete with others, and make a difference for our planet
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/login">
              <a data-testid="button-get-started">
                <Button size="lg" className="text-lg px-8">
                  Get Started Free
                </Button>
              </a>
            </Link>
            <Link href="#features">
              <a data-testid="button-learn-more">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EcoTrack?</h2>
            <p className="text-lg text-muted-foreground">Everything you need to live more sustainably</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">Together, we're making a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-users">
              <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg text-muted-foreground">Active Users</div>
            </div>
            <div data-testid="stat-carbon">
              <div className="text-5xl font-bold text-primary mb-2">2.5M kg</div>
              <div className="text-lg text-muted-foreground">CO₂ Reduced</div>
            </div>
            <div data-testid="stat-trees">
              <div className="text-5xl font-bold text-primary mb-2">50,000</div>
              <div className="text-lg text-muted-foreground">Trees Saved</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Start your journey in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of people tracking their environmental impact and building a sustainable future
          </p>
          <Link href="/login">
            <a data-testid="button-cta-signup">
              <Button size="lg" className="text-lg px-8">
                Start Tracking Today
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
