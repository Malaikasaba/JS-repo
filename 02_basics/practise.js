function getVowelsFromArray(stringArray) {
    const vowels = "aeiouAEIOU";
    let result = [];
  
    stringArray.forEach((str) => {
      result = result.concat([...str].filter((char) => vowels.includes(char)));
    });
  
    return result;
  }
  
  // Example usage:
  const myStringArray = ["A","B","C","D","E","F","G","H","I"];
  const resultVowels = getVowelsFromArray(myStringArray);
  console.log(resultVowels);
  