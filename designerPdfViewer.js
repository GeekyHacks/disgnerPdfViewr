function designerPdfViewer(h, word) {
  // Write your code here
  const abcs = [..."abcdefghijklmnopqrstuvwxyz"];
  let max = 0;
  for (let letter in word) {
    let position = abcs.indexOf(word[letter]);
    if (h[position] > max) max = h[position];
  }
  return max * word.length;
}
let result = designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "abc"
);
console.log(result);

/* given:
  h the array which contains all the height of alphbits 
  word is the word we wanna highlight it

  you need abcd array so you can match its index with given word letters 
  so you can find the greatest value for these letters in the hight array

  we used the for in loop to go through all elements smoothly
  you gonna use the indexof proprety to only select the index then to match it with the 
  index of height 


  */
