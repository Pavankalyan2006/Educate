
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizAppProps = {
  questions: QuizQuestion[];
  title: string;
};

export const QuizApp = ({ questions, title }: QuizAppProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers({ ...answers, [currentQuestion.id]: answer });
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setAnswers({});
  };

  if (showResults) {
    return (
      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold mb-2">{score} / {questions.length}</p>
          <p className="text-muted-foreground">
            {score === questions.length
              ? "Perfect! You got all questions right!"
              : score >= questions.length / 2
                ? "Good job! You passed the quiz."
                : "Keep practicing! You'll do better next time."}
          </p>
        </div>
        <Progress value={(score / questions.length) * 100} className="h-3 mb-6" />
        <div className="flex justify-center">
          <Button onClick={handleRetry} size="lg">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-6" />
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === option ? "secondary" : "outline"}
              className="w-full justify-start text-left h-auto py-3 px-4"
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleNextQuestion} 
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </Button>
      </div>
    </Card>
  );
};
