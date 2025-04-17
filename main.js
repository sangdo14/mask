const txt = document.querySelector('.txt');

window.addEventListener('scroll', ()=>{
  const scroll = window.scrollY;
  console.log(scroll);
  txt.style.left = 100 - scroll/5 + '%';
});
