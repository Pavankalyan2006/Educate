
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const { toast } = useToast();

  const handleNotifications = () => {
    toast({
      title: "No new notifications",
      description: "You're all caught up!",
    });
  };

  return (
    <header className="bg-card border-b border-border p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-foreground hidden md:block">
            <Link to="/">EduSmart</Link>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNotifications}
          >
            Notifications
          </Button>
          <Button variant="secondary" size="sm">
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};
