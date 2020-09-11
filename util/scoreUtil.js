class ScoreUtil {
    async getAll(references) {
        const userScores = UserScore.query()
        if(references) {
            const extractedReferences = references.split(",")
        }
    }
}