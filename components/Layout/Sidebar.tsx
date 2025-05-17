
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Book, 
  ListCheck, 
  BookText, 
  Play, 
  CheckCheck, 
  ArrowUp, 
  ArrowDown
} from "lucide-react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Flashcards", path: "/flashcards", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Quizzes", path: "/quizzes", icon: <Play className="h-5 w-5" /> },
    { name: "Habits", path: "/habits", icon: <ListCheck className="h-5 w-5" /> },
    { name: "Courses", path: "/courses", icon: <Book className="h-5 w-5" /> },
    { name: "Notes", path: "/notes", icon: <BookText className="h-5 w-5" /> },
    { name: "Progress", path: "/progress", icon: <CheckCheck className="h-5 w-5" /> },
  ];

  return (
    <div
      className={`bg-card border-r border-border transition-all duration-300 ease-in-out h-screen ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <Link to="/" className="font-bold text-xl text-primary">
            EduSmart
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          {isCollapsed ? (
            <ArrowDown className="h-5 w-5" />
          ) : (
            <ArrowUp className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="p-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors mb-1"
          >
            <span>{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};
