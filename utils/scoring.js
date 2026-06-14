// Advanced Scoring System
class ScoringEngine {
    constructor() {
        this.correctAnswers = new Map([
            [1, 'A'],
            [2, 'C'],
            [3, 'B'],
            [4, 'D'],
            [5, 'A']
        ]);
        this.scoringWeights = {
            multipleChoice: 0.4,
            essay: 0.6,
            correctness: 0.7,
            quality: 0.3
        };
    }

    scoreMultipleChoice(questionNum, userAnswer) {
        const correctAnswer = this.correctAnswers.get(questionNum);
        return userAnswer === correctAnswer ? 20 : 0;
    }

    scoreEssay(answer) {
        const minLength = 50;
        const goodLength = 150;
        const excellentLength = 300;

        let score = 0;
        const length = answer.trim().length;

        if (length >= minLength) score += 10;
        if (length >= goodLength) score += 5;
        if (length >= excellentLength) score += 5;

        // Quality indicators
        const hasStructure = answer.includes('.') && (answer.match(/\./g) || []).length >= 2;
        const hasKeywords = /\b(karena|oleh|dengan|melalui|sejak|seperti)\b/i.test(answer);
        const hasAnalysis = /\b(analisis|simpulan|kesimpulan|hasil|temuan|implikasi)\b/i.test(answer);

        if (hasStructure) score += 2;
        if (hasKeywords) score += 2;
        if (hasAnalysis) score += 4;

        return Math.min(score, 20);
    }

    calculateGPA(scores) {
        if (scores.length === 0) return 0;
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        return (average / 100) * 4.0;
    }

    calculateWeightedScore(mcScores, essayScores) {
        const mcAverage = mcScores.length > 0 ? mcScores.reduce((a, b) => a + b, 0) / mcScores.length : 0;
        const essayAverage = essayScores.length > 0 ? essayScores.reduce((a, b) => a + b, 0) / essayScores.length : 0;

        return (mcAverage * this.scoringWeights.multipleChoice) + (essayAverage * this.scoringWeights.essay);
    }

    getLetterGrade(score) {
        if (score >= 85) return 'A';
        if (score >= 75) return 'B';
        if (score >= 65) return 'C';
        if (score >= 55) return 'D';
        return 'E';
    }
}

const scoringEngine = new ScoringEngine();
window.scoringEngine = scoringEngine;