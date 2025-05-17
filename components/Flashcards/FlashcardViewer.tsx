
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

type FlashcardProps = {
  id: number;
  question: string;
  answer: string;
};

type FlashcardViewerProps = {
  cards: FlashcardProps[];
  onKnown: (id: number) => void;
  onUnknown: (id: number) => void;
};

export const FlashcardViewer = ({ cards, onKnown, onUnknown }: FlashcardViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-lg text-muted-foreground">No flashcards available</p>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleKnown = () => {
    onKnown(currentCard.id);
    nextCard();
  };

  const handleUnknown = () => {
    onUnknown(currentCard.id);
    nextCard();
  };

  const nextCard = () => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div 
        className={`flip-card w-full max-w-md h-64 cursor-pointer ${flipped ? 'flipped' : ''}`} 
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          <Card className="flip-card-front flex items-center justify-center p-6 text-center shadow-md">
            <div className="text-xl">{currentCard.question}</div>
          </Card>
          <Card className="flip-card-back flex items-center justify-center p-6 text-center shadow-md">
            <div className="text-xl">{currentCard.answer}</div>
          </Card>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        Click card to flip • Card {currentIndex + 1} of {cards.length}
      </div>
      
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" 
          onClick={handleUnknown}
        >
          <X className="mr-2 h-4 w-4" /> Don't Know
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-2 border-success text-success hover:bg-success hover:text-success-foreground" 
          onClick={handleKnown}
        >
          <Check className="mr-2 h-4 w-4" /> Know
        </Button>
      </div>
    </div>
  );
};
