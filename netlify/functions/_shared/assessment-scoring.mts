type Answer = { questionId?: string; choiceText?: string };
type Question = {
  id: string;
  category?: string;
  choices: Array<{ text: string; correct: boolean }>;
};
type Exam = { threshold?: number; questions?: Question[] };

export function scoreAssessment(exam: Exam, answers: Answer[]) {
  const questions = exam.questions || [];
  const byId = new Map(answers.map(answer => [answer.questionId, answer.choiceText]));
  if (!questions.length || answers.length !== questions.length || byId.size !== questions.length ||
    questions.some(question => !byId.has(question.id) || !question.choices.some(choice => choice.text === byId.get(question.id)))) {
    throw new Error('Answer every question in the current assessment.');
  }

  let correct = 0;
  const categories = new Map<string, { category: string; correct: number; total: number }>();
  for (const question of questions) {
    const right = Boolean(question.choices.find(choice => choice.text === byId.get(question.id))?.correct);
    if (right) correct += 1;
    const category = question.category || 'Module 1';
    const row = categories.get(category) || { category, correct: 0, total: 0 };
    row.correct += right ? 1 : 0;
    row.total += 1;
    categories.set(category, row);
  }
  const score = Math.round(correct / questions.length * 100);
  return {
    score,
    passed: score >= Number(exam.threshold || 70),
    pointsEarned: correct,
    pointsPossible: questions.length,
    categoryScores: Array.from(categories.values()).map(row => ({ ...row, percent: Math.round(row.correct / row.total * 100) }))
  };
}
