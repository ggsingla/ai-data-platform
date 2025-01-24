import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, LucideIcon, PieChart, Wallet } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  value: string | number;
  label: string;
};

const statsData: StatItem[] = [
  {
    icon: BarChart3,
    value: 36,
    label: "Sales",
  },
  {
    icon: PieChart,
    value: "$3,699",
    label: "Earnings",
  },
  {
    icon: Wallet,
    value: "$36,304",
    label: "Wallet",
  }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardDescription>
                {stat.label}
              </CardDescription>
              <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>

            </div>
            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600`}>
              <stat.icon className="size-6" />
            </div>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
