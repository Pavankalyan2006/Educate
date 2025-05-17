
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Course = {
  id: number;
  title: string;
  description: string;
  topic: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
};

type CourseCatalogProps = {
  courses: Course[];
};

export const CourseCatalog = ({ courses }: CourseCatalogProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");

  const topics = Array.from(new Set(courses.map((course) => course.topic)));

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTopic = topicFilter === "all" || course.topic === topicFilter;
    
    const matchesDuration = durationFilter === "all" || 
      (durationFilter === "short" && course.duration <= 30) ||
      (durationFilter === "medium" && course.duration > 30 && course.duration <= 60) ||
      (durationFilter === "long" && course.duration > 60);
    
    const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter;
    
    return matchesSearch && matchesTopic && matchesDuration && matchesLevel;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2">
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Select value={topicFilter} onValueChange={setTopicFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Select Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Topics</SelectItem>
              {topics.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={durationFilter} onValueChange={setDurationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="short">Short (&lt;30 min)</SelectItem>
              <SelectItem value="medium">Medium (30-60 min)</SelectItem>
              <SelectItem value="long">Long (&gt;60 min)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 h-3"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    course.level === "Beginner" 
                      ? "bg-success/20 text-success" 
                      : course.level === "Intermediate"
                        ? "bg-warning/20 text-warning"
                        : "bg-info/20 text-info"
                  }`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-muted px-2 py-1 rounded">
                    {course.topic}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {course.duration} min
                  </span>
                </div>
                <Button className="w-full mt-4" size="sm">
                  View Course
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No courses found matching your filters</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setTopicFilter("all");
              setDurationFilter("all");
              setLevelFilter("all");
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
