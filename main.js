const txt = document.querySelector('.txt');
const innerText = document.querySelector('.innerText');
const section = document.querySelector("section");

window.addEventListener('scroll', ()=>{
  const scroll = window.scrollY;
  console.log(scroll);
  txt.style.left = 100 - scroll/5 + '%';
  innerText.style.left = 100 - scroll/5 + '%';
  section.style.clipPath = `circle(${scroll}px at center)`;
});

