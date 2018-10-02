let todos = [];
let id = 0;

// 배열에 추가
function addTodo(title) {
  id++;
  const todo = { id, title, done: false };
  todos.push(todo);
  return todo;
}

// 배열에서 제거
function removeTodo(id) {
  const i = todos.findIndex(o => o.id === id);
  todos.splice(i, 1);
}

// done 값을 바꿈
function flipDone(id) {
  const todo = todos.find(o => o.id === id);
  const isDone = todo.done = !todo.done;
  return isDone;
}

const buttonAdd = document.getElementById('buttonAdd');
const inputTitle = document.getElementById('inputTitle');
const tbody = document.getElementById('target');

function append(title) {
  const todo = addTodo(title);
  tbody.insertRow(tbody.rows.length).innerHTML = `
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td>
      <button type="button" onclick="buttonDone(this)">완료</button>
      <button type="button" onclick="buttonDelete(this)">삭제</button>
    </td>
  `;
}

buttonAdd.onclick = function() {
  const title = inputTitle.value.trim();
  if (title) {
    append(title);
    inputTitle.value = '';
  }
};

function getId(node) {
  return parseInt(node.parentNode.parentNode.cells[0].textContent);
}

function buttonDone(node) {
  const classList = node.parentNode.parentNode.cells[1].classList;
  if (flipDone(getId(node))) {
    classList.add('done');
  } else {
    classList.remove('done');
  }
}

function buttonDelete(node) {
  removeTodo(getId(node));
  tbody.removeChild(node.parentNode.parentNode);
}
