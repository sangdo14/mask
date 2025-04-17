const divs = document.querySelectorAll('div');

divs.forEach((data, index)=>{
  // 각 div를 클릭하면
  data.addEventListener('click', ()=>{
    // 해당 요소에 on이 있으면 빼주고
    // 없으면 붙여주는 토글 기능 구현
    data.classList.toggle("on");
  });
});