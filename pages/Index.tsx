
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Play, ListCheck, Book } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Flashcards",
      description: "Review concepts with interactive flashcards",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      path: "/flashcards",
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Quizzes",
      description: "Test your knowledge with interactive quizzes",
      icon: <Play className="h-10 w-10 text-secondary" />,
      path: "/quizzes",
      color: "from-purple-50 to-pink-50"
    },
    {
      title: "Habit Tracking",
      description: "Build consistent study habits",
      icon: <ListCheck className="h-10 w-10 text-success" />,
      path: "/habits",
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Course Catalog",
      description: "Browse and filter available courses",
      icon: <Book className="h-10 w-10 text-warning" />,
      path: "/courses",
      color: "from-yellow-50 to-amber-50"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome to EduSmart
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your all-in-one interactive learning platform with flashcards, 
          quizzes, habit tracking and course management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <Link to={feature.path} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <CardContent className="p-6 flex gap-4 items-center">
                <div className={`rounded-full bg-gradient-to-br ${feature.color} p-3`}>
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start learning?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
          Choose any of our tools to boost your learning experience and track your progress.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/flashcards">Start with Flashcards</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
