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
let totalTime = 1;

setInterval(() => {
    degrees = shiftDegrees(degrees);
  const rotaion = `0 ${degrees} 0`

  sphere.setAttribute('rotation', rotaion)
},10);

var i = 1;

setInterval(() => {
  if(i==4){
    i = 1;
  }
  if(i==1){
    setAllHidden();
    one.setAttribute("visible","true");
    i++;
  } else if(i==2){
    setAllHidden();
    two.setAttribute("visible", "true");
    i++;
  } else if(i==3){
    setAllHidden();
    three.setAttribute("visible", "true");
    i++;
  }
}, 300)