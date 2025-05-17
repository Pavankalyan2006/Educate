
import { useState } from "react";
import { FlashcardViewer } from "@/components/Flashcards/FlashcardViewer";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FlashcardsPage = () => {
  const { toast } = useToast();
  const [knownCards, setKnownCards] = useState<number[]>([]);
  const [unknownCards, setUnknownCards] = useState<number[]>([]);

  const flashcards = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      id: 2,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee"
    },
    {
      id: 3,
      question: "What is the chemical symbol for gold?",
      answer: "Au"
    },
    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter"
    },
    {
      id: 5,
      question: "What year did the Titanic sink?",
      answer: "1912"
    }
  ];

  const handleKnownCard = (id: number) => {
    if (!knownCards.includes(id)) {
      setKnownCards([...knownCards, id]);
    }
    if (unknownCards.includes(id)) {
      setUnknownCards(unknownCards.filter(cardId => cardId !== id));
    }
    toast({
      title: "Card Marked as Known",
      description: "This card will appear less frequently in your reviews",
    });
  };

  const handleUnknownCard = (id: number) => {
    if (!unknownCards.includes(id)) {
      setUnknownCards([...unknownCards, id]);
    }
    if (knownCards.includes(id)) {
      setKnownCards(knownCards.filter(cardId => cardId !== id));
    }
    toast({
      title: "Card Marked for Review",
      description: "This card will appear more frequently in your reviews",
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Flashcards</h1>
        <p className="text-muted-foreground">
          Review key concepts with interactive flashcards. Click on a card to flip it and mark your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FlashcardViewer 
            cards={flashcards}
            onKnown={handleKnownCard}
            onUnknown={handleUnknownCard}
          />
        </div>
        
        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="font-medium mb-2">Statistics</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Cards:</span>
                <span className="font-medium">{flashcards.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Known Cards:</span>
                <span className="font-medium text-success">{knownCards.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cards to Review:</span>
                <span className="font-medium text-warning">{unknownCards.length}</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium mb-2">Tips</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Try to recall the answer before flipping the card</li>
              <li>• Use spaced repetition for better memory retention</li>
              <li>• Create your own cards for personalized learning</li>
              <li>• Review difficult cards more frequently</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsPage;
