
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

export type Habit = {
  id: number;
  name: string;
  completed: boolean;
  streak: number;
};

type HabitChecklistProps = {
  habits: Habit[];
  onToggleHabit: (id: number) => void;
};

export const HabitChecklist = ({ habits, onToggleHabit }: HabitChecklistProps) => {
  const completedCount = habits.filter(habit => habit.completed).length;
  const progress = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;
  
  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daily Habits</h2>
        <span className="text-sm text-muted-foreground">
          {completedCount} of {habits.length} completed
        </span>
      </div>
      
      <Progress value={progress} className="h-2 mb-6" />
      
      <div className="space-y-3">
        {habits.map(habit => (
          <div 
            key={habit.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              habit.completed ? 'bg-muted/50 border-success' : 'bg-background border-border'
            }`}
          >
            <div className="flex items-center gap-3">
              <Checkbox 
                checked={habit.completed}
                onCheckedChange={() => onToggleHabit(habit.id)}
                className={habit.completed ? 'bg-success border-success' : ''}
              />
              <span className={habit.completed ? 'line-through text-muted-foreground' : ''}>
                {habit.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-muted px-2 py-1 rounded text-muted-foreground">
                {habit.streak} day streak
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {habits.length === 0 && (
        <div className="text-center py-6 text-muted-foreground">
          No habits added yet. Start adding habits to track your progress!
        </div>
      )}
    </Card>
  );
};
