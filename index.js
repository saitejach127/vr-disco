const $ = (query) => document.querySelector(query);

const sphere = $('a-entity');
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");

function setAllHidden(){
  one.setAttribute("visible", "false");
  two.setAttribute("visible", "false");
  three.setAttribute("visible", "false");
}

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;
let time = 0.0;
let totalTime = 100;

setInterval(() => {
    degrees = shiftDegrees(degrees);
  const rotaion = `0 ${degrees} 0`

  sphere.setAttribute('rotation', rotaion)
},10);

var i = 1;

// setInterval(() => {
//   if(i==4){
//     i = 1;
//   }
//   if(i==1){
//     setAllHidden();
//     one.setAttribute("visible","true");
//     i++;
//   } else if(i==2){
//     setAllHidden();
//     two.setAttribute("visible", "true");
//     i++;
//   } else if(i==3){
//     setAllHidden();
//     three.setAttribute("visible", "true");
//     i++;
//   }
// }, 300)

setInterval(() => {
  if(time >= totalTime){
    time = 0;
  }
  time += 0.01;
}, 10);

setInterval(() => {
  let angle = (360/totalTime) * time;
  let x = Math.sin(angle);
  let z = Math.cos(angle);
  one.setAttribute("position", `${3*x} 3 ${3*z}`);
  two.setAttribute("position", `${3*z} 3 ${3*x}`)
  degrees = shiftDegrees(degrees);
  one.setAttribute("color", `hsl(${degrees}, 100%, 50%)`);
  two.setAttribute("color", `hsl(100%, 50%, ${degrees})`)
}, totalTime)
