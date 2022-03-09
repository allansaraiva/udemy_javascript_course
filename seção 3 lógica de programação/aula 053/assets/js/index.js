const elements = [
  {tag: 'p', text: 'phrase 1'},
  {tag: 'div', text: 'phrase 2'},
  {tag: 'section', text: 'phrase 3'},
  {tag: 'footer', text: 'phrase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
  let {tag, text} = elements[i];
  let creatTag = document.createElement(tag);
  creatTag.innerText = text;
  div.appendChild(creatTag);
}

container.appendChild(div);