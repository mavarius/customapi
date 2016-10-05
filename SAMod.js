module.exports = (sentence) => {
  if (!sentence) {
    return console.error('Must provide sentence to analyze')
  } else {
    let decoded = decodeURI(sentence)

    let analyzed = {
      words: 0,
      characters: 0,
      averageWordLength: 0
    }

    analyzed.characters = decoded.length
    analyzed.words = decoded.split(' ').length
    analyzed.averageWordLength = (analyzed.characters - (analyzed.words - 1)) / analyzed.words

    return JSON.stringify(analyzed)
  }
}
