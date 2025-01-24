"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", submissions: 45, earnings: 450 },
  { month: "Feb", submissions: 65, earnings: 650 },
  { month: "Mar", submissions: 90, earnings: 900 },
  { month: "Apr", submissions: 110, earnings: 1100 },
]

const chartConfig = {
  submissions: {
    label: "Submissions",
    theme: {
      light: "hsl(var(--primary))",
      dark: "hsl(var(--primary))",
    },
  },
  earnings: {
    label: "Earnings ($)",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
}

export function ContributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Overview</CardTitle>
        <CardDescription>
          This chart shows the number of submissions and earnings for each month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          <ChartContainer config={chartConfig}>
            <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="submissions"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="earnings"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
} 