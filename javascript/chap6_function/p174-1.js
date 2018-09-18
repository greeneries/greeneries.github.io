function getSentence({ subject, verb, object }) {
  if(`${subject}`== "I"){
      console.log("true");
  }
 return `${subject} ${verb} ${object}`;
}
const o = {
 subject: "I",
 verb: "love",
 object: "JavaScript",
};
console.log(getSentence(o));
