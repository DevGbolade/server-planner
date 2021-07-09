const words = ["the", "boy", "girl", "kiss", "then"];

export const hasWord = (word) => {
  for (let i = 0; i < words.length; i++) {
    if (word.toLowerCase() === words[i].toLowerCase()) {
      return true;
    }
  }
  return false;
};

console.log(hasWord("the"));
