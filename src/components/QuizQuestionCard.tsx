"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion } from "@/lib/quizData";

interface QuizQuestionCardProps {
  question: QuizQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
}

export default function QuizQuestionCard({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  showPrevious = false
}: QuizQuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Questão {currentQuestionIndex + 1} de {totalQuestions}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`w-full text-left justify-start p-4 h-auto ${
                selectedAnswer === index 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => onAnswerSelect(index)}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </Button>
          ))}
        </div>
        
        <div className="flex justify-between">
          {showPrevious && onPrevious ? (
            <Button 
              variant="outline" 
              onClick={onPrevious}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Anterior
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button 
            onClick={onNext}
            disabled={selectedAnswer === null}
            className="bg-black text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500"
          >
            {currentQuestionIndex === totalQuestions - 1 ? "Finalizar" : "Próxima"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
