import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Zap, Droplet, Trash2, Car, Calendar } from "lucide-react";

export default function TrackUsage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    energy: "",
    water: "",
    waste: "",
    transportation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Usage Logged!",
      description: "Your daily consumption has been recorded successfully.",
    });
    setFormData({ energy: "", water: "", waste: "", transportation: "" });
  };

  const categories = [
    {
      id: "energy",
      icon: Zap,
      title: "Energy Usage",
      description: "Track your electricity consumption",
      unit: "kWh",
      placeholder: "e.g., 12.5",
    },
    {
      id: "water",
      icon: Droplet,
      title: "Water Usage",
      description: "Monitor your water consumption",
      unit: "Liters",
      placeholder: "e.g., 150",
    },
    {
      id: "waste",
      icon: Trash2,
      title: "Waste Generated",
      description: "Log the waste you've produced",
      unit: "kg",
      placeholder: "e.g., 2.5",
    },
    {
      id: "transportation",
      icon: Car,
      title: "Transportation",
      description: "Miles traveled by car",
      unit: "Miles",
      placeholder: "e.g., 25",
    },
  ];

  const recentEntries = [
    { date: "Today", energy: "12.5 kWh", water: "150 L", waste: "2.5 kg", transport: "25 mi" },
    { date: "Yesterday", energy: "11.2 kWh", water: "140 L", waste: "2.0 kg", transport: "20 mi" },
    { date: "2 days ago", energy: "13.8 kWh", water: "160 L", waste: "3.0 kg", transport: "30 mi" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-track-title">Track Your Usage</h1>
          <p className="text-muted-foreground">Log your daily consumption to monitor your environmental impact</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {categories.map((category) => (
              <Card key={category.id} data-testid={`card-${category.id}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor={category.id}>Amount ({category.unit})</Label>
                    <Input
                      id={category.id}
                      type="number"
                      step="0.1"
                      placeholder={category.placeholder}
                      value={formData[category.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [category.id]: e.target.value })}
                      data-testid={`input-${category.id}`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <Button type="submit" size="lg" data-testid="button-submit-usage">
              Log Today's Usage
            </Button>
          </div>
        </form>

        <Card data-testid="card-history">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Entries
            </CardTitle>
            <CardDescription>Your usage history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Energy</th>
                    <th className="text-left py-3 px-4 font-medium">Water</th>
                    <th className="text-left py-3 px-4 font-medium">Waste</th>
                    <th className="text-left py-3 px-4 font-medium">Transport</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEntries.map((entry, index) => (
                    <tr key={index} className="border-b hover-elevate" data-testid={`row-entry-${index}`}>
                      <td className="py-3 px-4">{entry.date}</td>
                      <td className="py-3 px-4">{entry.energy}</td>
                      <td className="py-3 px-4">{entry.water}</td>
                      <td className="py-3 px-4">{entry.waste}</td>
                      <td className="py-3 px-4">{entry.transport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
