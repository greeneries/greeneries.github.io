const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
console.log(para1.textContent);
console.log(para1.innerHTML);

//para1.textContent; // "This is a simple HTML file."
para1.innerHTML;      // "This is a <i>simple</i> HTML file."
//para1.textContent = "Modified HTML file";       // look for change in browser
para1.innerHTML = "<i>Modified</i> HTML file";  // look for change in browser



const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";
