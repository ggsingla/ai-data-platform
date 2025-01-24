"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Task = {
  category: string
  subCategory: string
  price: number
}

const tasks: Task[] = [
  {
    category: "Image & Vision",
    subCategory: "Object Classification",
    price: 15,
  },
  {
    category: "Natural Language",
    subCategory: "Text Annotation",
    price: 25,
  },
  {
    category: "Speech & Audio",
    subCategory: "Voice Recording",
    price: 20,
  },
]

export function AvailableTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Tasks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{task.category}</p>
              <p className="text-sm text-muted-foreground">{task.subCategory}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-green-600">
                ${task.price}
              </span>
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                Start Task
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 