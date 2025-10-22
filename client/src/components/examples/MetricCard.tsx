import MetricCard from '../MetricCard';
import { Leaf, TrendingUp, Flame, Award } from 'lucide-react';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
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
  );
}
