
import { CourseCatalog, Course } from "@/components/Courses/CourseCatalog";

const CoursesPage = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      description: "Learn the basics of Python programming language, from variables to functions.",
      topic: "Programming",
      duration: 45,
      level: "Beginner"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      description: "Dive deep into advanced JavaScript concepts like closures, prototypes, and ES6 features.",
      topic: "Programming",
      duration: 90,
      level: "Advanced"
    },
    {
      id: 3,
      title: "Fundamentals of Data Science",
      description: "Introduction to data science concepts, tools, and methodologies.",
      topic: "Data Science",
      duration: 60,
      level: "Intermediate"
    },
    {
      id: 4,
      title: "World History: Ancient Civilizations",
      description: "Explore ancient civilizations from Mesopotamia to Rome and their contributions.",
      topic: "History",
      duration: 75,
      level: "Beginner"
    },
    {
      id: 5,
      title: "Introduction to Digital Marketing",
      description: "Learn the fundamentals of digital marketing strategies and tools.",
      topic: "Marketing",
      duration: 30,
      level: "Beginner"
    },
    {
      id: 6,
      title: "Organic Chemistry Fundamentals",
      description: "Study the core concepts of organic chemistry and molecular structures.",
      topic: "Chemistry",
      duration: 120,
      level: "Advanced"
    },
    {
      id: 7,
      title: "Calculus I: Derivatives and Integrals",
      description: "Comprehensive course on differential and integral calculus.",
      topic: "Mathematics",
      duration: 90,
      level: "Intermediate"
    },
    {
      id: 8,
      title: "Introduction to Psychology",
      description: "Explore the fundamentals of human behavior and mental processes.",
      topic: "Psychology",
      duration: 40,
      level: "Beginner"
    },
    {
      id: 9,
      title: "Spanish for Beginners",
      description: "Learn basic Spanish vocabulary, grammar, and conversation skills.",
      topic: "Languages",
      duration: 60,
      level: "Beginner"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Course Catalog</h1>
        <p className="text-muted-foreground">
          Browse our collection of courses by topic, duration, or difficulty level.
        </p>
      </div>

      <CourseCatalog courses={courses} />
    </div>
  );
};

export default CoursesPage;
