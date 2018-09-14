

const input = "As I was going to Saint Ives";

var reg=/\w{4,}/ig;
console.log(reg instanceof RegExp);

const output = input.replace(/\w{4,}/ig, '****');  // "As I was ****
console.log(output);
