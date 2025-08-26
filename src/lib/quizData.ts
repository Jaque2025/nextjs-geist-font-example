export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual destas palavras é uma conjunção aditiva?",
    options: ["mas", "e", "ou", "porém"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Identifique a conjunção adversativa:",
    options: ["nem", "portanto", "contudo", "logo"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Qual conjunção expressa alternância?",
    options: ["ou", "e", "mas", "pois"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "A conjunção 'porque' é classificada como:",
    options: ["adversativa", "aditiva", "causal", "alternativa"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Qual destas é uma conjunção conclusiva?",
    options: ["embora", "quando", "portanto", "se"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "A conjunção 'embora' expressa:",
    options: ["condição", "concessão", "causa", "tempo"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Identifique a conjunção temporal:",
    options: ["caso", "quando", "conforme", "conquanto"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Qual conjunção indica condição?",
    options: ["se", "como", "que", "onde"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "A conjunção 'todavia' é:",
    options: ["explicativa", "adversativa", "aditiva", "alternativa"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Qual destas conjunções é explicativa?",
    options: ["nem", "pois", "mas", "ou"],
    correctAnswer: 1
  }
];

export const getQuizData = (): QuizQuestion[] => {
  if (quizData.length === 0) {
    throw new Error("Dados do quiz não encontrados");
  }
  return quizData;
};
