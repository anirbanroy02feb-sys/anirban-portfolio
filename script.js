const skills=[
["Python",72],["C",65],["C++",68],["HTML",78],["CSS",75],["SQL / MySQL",70],
["AI Fundamentals",64],["Machine Learning",62],["Data Mining",63],["Pandas",66],["NumPy",65],
["DBMS",70],["Git",68],["GitHub",70],["VS Code",85],["Google Colab",75],["Jupyter Notebook",72],["MySQL Workbench",67]
];
const grid=document.getElementById("skillsGrid");
skills.forEach(([name,val])=>{
 grid.innerHTML+=`<div class="skill reveal"><div class="skill-top"><span>${name}</span><b>${val}%</b></div><div class="bar"><div class="fill" data-width="${val}%"></div></div></div>`;
});
document.getElementById("year").textContent=new Date().getFullYear();

const words=["Developer","AI/ML Learner","Problem Solver","Project Builder"];
let wi=0,ci=0,del=false;
const typing=document.getElementById("typing");
function type(){
 const word=words[wi];
 typing.textContent=del?word.slice(0,--ci):word.slice(0,++ci);
 if(!del&&ci===word.length){del=true;setTimeout(type,1100);return}
 if(del&&ci===0){del=false;wi=(wi+1)%words.length}
 setTimeout(type,del?55:90);
}
type();

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   e.target.classList.add("visible");
   e.target.querySelectorAll(".fill").forEach(f=>f.style.width=f.dataset.width);
  }
 });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".nav-links");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const glow=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
