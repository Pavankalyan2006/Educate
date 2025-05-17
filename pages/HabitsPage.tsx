
import { useState } from "react";
import { HabitChecklist, Habit } from "@/components/HabitTracker/HabitChecklist";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Study for 30 minutes", completed: false, streak: 3 },
    { id: 2, name: "Read a book chapter", completed: false, streak: 5 },
    { id: 3, name: "Practice vocabulary", completed: false, streak: 2 },
    { id: 4, name: "Complete one quiz", completed: false, streak: 1 },
    { id: 5, name: "Review flashcards", completed: true, streak: 7 },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const completedCount = habits.filter(habit => habit.completed).length;
  const totalHabits = habits.length;
  const completionPercentage = totalHabits > 0 ? (completedCount / totalHabits) * 100 : 0;
  
  // Calculate average streak
  const averageStreak = habits.length > 0
    ? habits.reduce((sum, habit) => sum + habit.streak, 0) / habits.length
    : 0;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Daily Habits</h1>
        <p className="text-muted-foreground">
          Track your daily study habits and build consistency in your learning routine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HabitChecklist habits={habits} onToggleHabit={toggleHabit} />
        </div>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Today's Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Completion</span>
                <span className="text-sm font-medium">{completedCount}/{totalHabits}</span>
              </div>
              <Progress value={completionPercentage} className="h-3" />
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Average Streak</span>
                <span className="text-sm font-medium">{averageStreak.toFixed(1)} days</span>
              </div>
              <Progress value={(averageStreak / 10) * 100} className="h-3" />
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-3">Tips for Building Habits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Start small with achievable daily goals</li>
              <li>• Be consistent and check habits daily</li>
              <li>• Track your progress for motivation</li>
              <li>• Don't break the chain of completed days</li>
              <li>• Use reminders to help you stay on track</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HabitsPage;
