import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

export default function Leaderboard() {
  const [period, setPeriod] = useState<"weekly" | "monthly" | "all-time">("weekly");

  const topThree = [
    { rank: 1, name: "Sarah Chen", score: 2845, streak: 45, badge: "Eco Champion" },
    { rank: 2, name: "Mike Johnson", score: 2720, streak: 38, badge: "Green Hero" },
    { rank: 3, name: "Emma Davis", score: 2650, streak: 42, badge: "Planet Saver" },
  ];

  const otherUsers = [
    { rank: 4, name: "Alex Rodriguez", score: 2580, streak: 35 },
    { rank: 5, name: "Lisa Wang", score: 2510, streak: 30 },
    { rank: 6, name: "James Brown", score: 2445, streak: 28 },
    { rank: 7, name: "Sophia Lee", score: 2380, streak: 25 },
    { rank: 8, name: "David Kim", score: 2320, streak: 22 },
    { rank: 142, name: "You", score: 892, streak: 28, isCurrentUser: true },
  ];

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return null;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-leaderboard-title">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other eco-warriors</p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          <Button
            variant={period === "weekly" ? "default" : "outline"}
            onClick={() => setPeriod("weekly")}
            data-testid="button-weekly"
          >
            Weekly
          </Button>
          <Button
            variant={period === "monthly" ? "default" : "outline"}
            onClick={() => setPeriod("monthly")}
            data-testid="button-monthly"
          >
            Monthly
          </Button>
          <Button
            variant={period === "all-time" ? "default" : "outline"}
            onClick={() => setPeriod("all-time")}
            data-testid="button-all-time"
          >
            All Time
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {topThree.map((user) => (
            <Card 
              key={user.rank} 
              className={`${user.rank === 1 ? "md:order-2 ring-2 ring-primary" : user.rank === 2 ? "md:order-1" : "md:order-3"}`}
              data-testid={`card-top-${user.rank}`}
            >
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  {getRankIcon(user.rank)}
                </div>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  <Award className="w-3 h-3 mr-1" />
                  {user.badge}
                </Badge>
                <div className="text-2xl font-bold text-primary mb-1">{user.score}</div>
                <p className="text-sm text-muted-foreground">{user.streak} day streak</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card data-testid="card-rankings">
          <CardContent className="p-0">
            <div className="divide-y">
              {otherUsers.map((user, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${user.isCurrentUser ? "bg-primary/5" : "hover-elevate"}`}
                  data-testid={`row-user-${user.rank}`}
                >
                  <div className="w-12 text-center font-semibold text-muted-foreground">
                    #{user.rank}
                  </div>
                  <Avatar>
                    <AvatarFallback className={user.isCurrentUser ? "bg-primary text-primary-foreground" : ""}>
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">
                      {user.name}
                      {user.isCurrentUser && (
                        <Badge variant="secondary" className="ml-2">You</Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{user.streak} day streak</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{user.score}</div>
                    <div className="text-xs text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
