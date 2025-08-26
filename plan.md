```markdown
# Plano Detalhado - Quiz Sobre Conjunções

Este plano implementa um quiz interativo sobre conjunções utilizando a estrutura existente do projeto Next.js. O quiz exibirá perguntas de múltipla escolha, permitirá ao usuário navegar entre as questões e exibirá a pontuação final ao término.

---

## Arquivos a Serem Criados/Modificados

### 1. Criar Arquivo de Dados do Quiz
**Arquivo:** `src/lib/quizData.ts`  
**Objetivo:** Fornecer os dados das questões do quiz.  
**Alterações e Conteúdo:**
- Exportar um array de objetos, onde cada objeto contém:
  - `id`: identificador único para a questão.
  - `question`: String da pergunta (ex.: "Qual destas palavras é uma conjunção aditiva?").
  - `options`: Array de strings com as opções de resposta.
  - `correctAnswer`: Índice (number) da resposta correta.
- Incluir tratamento de erro caso o array esteja vazio (caso algum arquivo consuma esses dados, exibir uma mensagem apropriada).

### 2. Criar Componente da Questão
**Arquivo:** `src/components/QuizQuestionCard.tsx`  
**Objetivo:** Renderizar cada questão do quiz.
**Alterações e Conteúdo:**
- Criar um componente funcional que receba via props:
  - A questão (texto e opções).
  - O índice da questão atual (para exibição de progresso, ex.: "Questão 1 de 5").
  - Uma callback para retorno da opção escolhida.
- Utilizar o componente de botão existente em `src/components/ui/button.tsx` para cada opção.
- Incluir tratamento de estado para botões selecionados e feedback visual (ex.: mudança de cor ou borda para indicar seleção).
- Garantir que não haja utilização de ícones ou imagens de bibliotecas externas – focar em tipografia, cores e espaçamentos.

### 3. Criar Componente do Resultado Final
**Arquivo:** `src/components/QuizResult.tsx`  
**Objetivo:** Exibir a pontuação final e permitir reiniciar o quiz.
**Alterações e Conteúdo:**
- Criar um componente funcional que receba:
  - A pontuação final.
  - Uma função de reinicialização do quiz.
- Exibir a mensagem “Você acertou X de Y questões” com tipografia moderna e espaçamentos adequados.
- Incluir um botão “Jogar Novamente” utilizando o componente de botão da UI.

### 4. Criar Página do Quiz
**Arquivo:** `src/app/quiz/page.tsx`  
**Objetivo:** Página principal onde o quiz será executado.
**Alterações e Conteúdo:**
- Importar os dados do quiz de `src/lib/quizData.ts` e os componentes `QuizQuestionCard` e `QuizResult`.
- Gerenciar o estado do quiz usando hooks do React (`useState`):
  - Estado para o índice da questão atual.
  - Armazenar as respostas selecionadas e calcular a pontuação.
  - Alternar entre a visualização das questões e o resultado final.
- Incluir cabeçalho com título "Quiz Sobre Conjunções" com estilos modernos (tipografia limpa e espaçamentos suficientes).
- Adicionar validação: se não houver dados, exibir mensagem de erro amigável.
- Implementar navegação “Próxima” e opcional “Anterior” com tratamento para evitar acesso indevido a índices fora do array.

### 5. Estilização Global (Opcional)
**Arquivo:** `src/app/globals.css`  
**Objetivo:** Ajustar ou incluir estilos para que os novos componentes tenham um design moderno e responsivo.
**Alterações e Conteúdo:**
- Adicionar classes utilitárias para margens, espaçamento e responsividade se necessário.
- Garantir que o layout mantenha hierarquia visual consistente mesmo sem imagens ou ícones externos.

---

## Boas Práticas e Tratamento de Erros
- Testar a existência de dados do quiz e exibir mensagens adequadas se inexistentes.
- Validar a seleção de resposta antes de permitir a navegação para a próxima pergunta.
- Incluir verificações de índice para prevenir erros de acesso a elementos inexistentes no array de questões.
- Utilizar componentes existentes de UI para manter consistência visual.
- Garantir que todos os botões e elementos interativos possuam rótulos acessíveis (aria-labels) para melhor usabilidade.

---

## Fluxo do Quiz (Caso de Uso Real)
- O usuário acessa a página `/quiz` e vê um cabeçalho e uma mensagem introdutória.
- Inicia o quiz e cada questão é renderizada com as opções de múltipla escolha.
- Ao selecionar uma resposta, o usuário clica em “Próxima” (ou “Anterior” se permitido) e navega pelas perguntas.
- Após a última questão, o componente de resultado exibe a pontuação, com opção para “Jogar Novamente”.
- Todo o processo incorpora feedback visual, validações de entrada e um design moderno com tipografia clara, cores contrastantes e espaçamentos adequados.

---

## Resumo
- Criar `src/lib/quizData.ts` para armazenar os dados do quiz com perguntas, opções e resposta correta.
- Desenvolver `QuizQuestionCard.tsx` para renderizar cada questão com botões interativos.
- Desenvolver `QuizResult.tsx` para apresentar a pontuação final e opção de reiniciar.
- Criar a página principal em `src/app/quiz/page.tsx` que gerencia o fluxo do quiz usando hooks do React.
- Ajustar `globals.css` se necessário para garantir um design moderno, acessível e responsivo.
