const bruce = {
  name: "Bruce"
};

const madeline = {
  name: "Madeline"
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

// bind : 함수를 실행하는게 아니라 함수안에서 사용 할
// this를 전달하는 파라미터로 고정시킨 함수를 리턴한다.
const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
console.log(bruce);

updateBruce.call(madeline, 1274, "king");
console.log(madeline);
