import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Flame, Leaf, Settings, TrendingUp } from "lucide-react";

export default function Profile() {
  const user = {
    name: "Alex Johnson",
    username: "@alexj",
    joinDate: "January 2025",
    streak: 28,
    totalPoints: 892,
    rank: 142,
  };

  const badges = [
    { name: "Early Adopter", icon: Award, unlocked: true },
    { name: "Week Warrior", icon: Flame, unlocked: true },
    { name: "Water Saver", icon: Leaf, unlocked: true },
    { name: "Eco Champion", icon: TrendingUp, unlocked: false },
    { name: "Community Leader", icon: Award, unlocked: false },
    { name: "Green Hero", icon: Leaf, unlocked: false },
  ];

  const stats = [
    { label: "Total Carbon Saved", value: "1,245 kg" },
    { label: "Trees Equivalent", value: "62" },
    { label: "Water Saved", value: "3,200 L" },
    { label: "Days Active", value: "45" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-profile-title">Profile</h1>
          <p className="text-muted-foreground">View your stats and achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1" data-testid="card-user-info">
            <CardContent className="pt-6">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <p className="text-muted-foreground mb-4">{user.username}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </div>
                <Button className="w-full" data-testid="button-edit-profile">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2" data-testid="card-quick-stats">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">{user.streak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">{user.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">#{user.rank}</div>
                  <div className="text-sm text-muted-foreground">Global Rank</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Badges Earned</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8" data-testid="card-lifetime-impact">
          <CardHeader>
            <CardTitle>Lifetime Impact</CardTitle>
            <CardDescription>Your total environmental contribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-badges">
          <CardHeader>
            <CardTitle>Badges & Achievements</CardTitle>
            <CardDescription>Your earned and locked achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border text-center ${
                    badge.unlocked
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/20 border-muted opacity-50"
                  }`}
                  data-testid={`badge-${index}`}
                >
                  <badge.icon
                    className={`w-12 h-12 mx-auto mb-2 ${
                      badge.unlocked ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div className="font-medium">{badge.name}</div>
                  {badge.unlocked && (
                    <Badge variant="secondary" className="mt-2">
                      Unlocked
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
