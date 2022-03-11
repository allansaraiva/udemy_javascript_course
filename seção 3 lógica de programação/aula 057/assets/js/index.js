const paragraphs = document.querySelector('.paragraphs');
const tagP = paragraphs.querySelectorAll('p');
const stylesOfBody = getComputedStyle(document.body);
const backgroundColorOfBody = stylesOfBody.backgroundColor;

for (let p of tagP) {
  p.style.backgroundColor = backgroundColorOfBody;
  p.style.color = '#fff';
}