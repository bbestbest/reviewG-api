module.exports = function(storyScore,gameplayScore,performanceScore,graphicScore) {
    const overallScore = (storyScore + gameplayScore + performanceScore + graphicScore)/4
    return overallScore
}