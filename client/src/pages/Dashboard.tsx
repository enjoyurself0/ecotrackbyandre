import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Flame, Award, TrendingUp, Zap, Droplet, Trash2, Car } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const weeklyData = [
    { day: "Mon", energy: 45, water: 120, waste: 8 },
    { day: "Tue", energy: 38, water: 110, waste: 6 },
    { day: "Wed", energy: 42, water: 115, waste: 7 },
    { day: "Thu", energy: 35, water: 100, waste: 5 },
    { day: "Fri", energy: 40, water: 105, waste: 7 },
    { day: "Sat", energy: 30, water: 95, waste: 4 },
    { day: "Sun", energy: 32, water: 90, waste: 5 },
  ];

  const categoryData = [
    { name: "Transportation", value: 35, color: "hsl(var(--chart-1))" },
    { name: "Energy", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Water", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Waste", value: 15, color: "hsl(var(--chart-4))" },
  ];

  const recentActivity = [
    { action: "Logged energy usage", time: "2 hours ago", icon: Zap },
    { action: "Earned 'Water Saver' badge", time: "5 hours ago", icon: Award },
    { action: "Completed daily check-in", time: "1 day ago", icon: Leaf },
    { action: "Logged transportation", time: "2 days ago", icon: Car },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-dashboard-title">Dashboard</h1>
          <p className="text-muted-foreground">Track your environmental impact and progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Carbon Saved"
            value="245 kg"
            subtitle="This month"
            icon={Leaf}
            trend="up"
            trendValue="12% from last month"
          />
          <MetricCard
            title="Streak Days"
            value="28"
            subtitle="Current streak"
            icon={Flame}
            trend="up"
            trendValue="Personal best!"
          />
          <MetricCard
            title="Rank"
            value="#142"
            subtitle="Global ranking"
            icon={Award}
            trend="up"
            trendValue="Up 23 places"
          />
          <MetricCard
            title="Eco Score"
            value="892"
            subtitle="Total points"
            icon={TrendingUp}
            trend="up"
            trendValue="+45 this week"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card data-testid="card-weekly-usage">
            <CardHeader>
              <CardTitle>Weekly Usage Trend</CardTitle>
              <CardDescription>Your consumption over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px"
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="energy" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Energy (kWh)" />
                  <Line type="monotone" dataKey="water" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Water (L)" />
                  <Line type="monotone" dataKey="waste" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Waste (kg)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card data-testid="card-category-breakdown">
            <CardHeader>
              <CardTitle>Impact by Category</CardTitle>
              <CardDescription>Where your carbon footprint comes from</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2" data-testid="card-monthly-comparison">
            <CardHeader>
              <CardTitle>Monthly Comparison</CardTitle>
              <CardDescription>Compare your usage across months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[
                  { month: "Jan", carbon: 320 },
                  { month: "Feb", carbon: 280 },
                  { month: "Mar", carbon: 245 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px"
                    }}
                  />
                  <Bar dataKey="carbon" fill="hsl(var(--chart-1))" name="Carbon (kg)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card data-testid="card-recent-activity">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`activity-${index}`}>
                    <div className="mt-1">
                      <activity.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
