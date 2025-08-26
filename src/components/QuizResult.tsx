"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResult({ score, totalQuestions, onRestart }: QuizResultProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Excelente! Você domina as conjunções!";
    if (percentage >= 70) return "Muito bom! Você tem um bom conhecimento sobre conjunções.";
    if (percentage >= 50) return "Bom trabalho! Continue estudando para melhorar.";
    return "Continue praticando! O estudo das conjunções é importante.";
  };

  const getScoreColor = () => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
          Quiz Finalizado!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="space-y-4">
          <div className="text-6xl font-bold text-gray-900">
            {score}/{totalQuestions}
          </div>
          
          <div className={`text-2xl font-semibold ${getScoreColor()}`}>
            {percentage}%
          </div>
          
          <p className="text-lg text-gray-700">
            Você acertou <span className="font-semibold">{score}</span> de{" "}
            <span className="font-semibold">{totalQuestions}</span> questões
          </p>
          
          <p className={`text-lg font-medium ${getScoreColor()}`}>
            {getScoreMessage()}
          </p>
        </div>

        <div className="pt-4">
          <Button 
            onClick={onRestart}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
          >
            Jogar Novamente
          </Button>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Dicas para melhorar:
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Estude os diferentes tipos de conjunções: coordenativas e subordinativas</p>
            <p>• Pratique identificando conjunções em textos</p>
            <p>• Memorize as principais conjunções de cada categoria</p>
            <p>• Faça exercícios regulares para fixar o conteúdo</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
