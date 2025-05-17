
import { QuizApp, QuizQuestion } from "@/components/Quiz/QuizApp";

const QuizzesPage = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      id: 2,
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      id: 3,
      question: "Which gas do plants primarily absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide"
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      id: 5,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      correctAnswer: "H2O"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-muted-foreground">
          Test your knowledge with interactive quizzes. Complete the quiz to see your score and track your progress.
        </p>
      </div>

      <QuizApp questions={quizQuestions} title="General Knowledge Quiz" />
    </div>
  );
};

export default QuizzesPage;
