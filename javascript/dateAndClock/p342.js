const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;
// starting with the string (input)
console.log(input.match(re));      // ["was", "going", "Saint", "Ives"]
console.log(input.search(re));     // 5 (the first three-letter word starts at index 5)
// starting with the regex (re)
re.test(input);       // true (input contains at least one three-letter word)
re.exec(input);       // ["was"] (first match)
re.exec(input);       // ["going"] (exec "remembers" where it is)
re.exec(input);       // ["Saint"]
re.exec(input);       // ["Ives"]
re.exec(input);       // null -- no more matches
// note that any of these methods can be used directly with a regex literal
console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
/\w{3,}/ig.test(input);
/\w{3,}/ig.exec(input);
