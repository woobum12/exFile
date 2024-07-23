var d = document;
// id="skill"
const skill = d.getElementById("skill");
skill.style.backgroundColor = "pink";
console.log(skill.innerText);
// <a> 
const naver = d.getElementsByTagName("a");
naver[0].style.backgroundColor = "orange";
console.log(naver);

// <a><a><a> <a>[0],<a>[1],<a>[2]
const w3_2 = d.getElementsByTagName("a")[2];
w3_2.innerHTML = "a태그의 세번째[0]요소";
w3_2.style.backgroundColor = "violet";
console.log(w3_2);