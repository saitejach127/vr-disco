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

var dancingModels = [
  {
    modelName: "dancing-knight",
    modelFileLocation: "./models/dancing-knight.glb",
    modelScale: 0.5,
    animationName: "ezgif.com-video-to-gif"
  }
]

var DANCE_SET_REPEAT_COUNT = 1;
var takenPositions = new Set();

function getRandomNumber(MIN_NUMBER = -5, MAX_NUMBER = 5){
  let min = Math.ceil(MIN_NUMBER);
  let max = Math.floor(MAX_NUMBER);
  return Math.floor(Math.random() * (max - min) + min);
}

function getUniqueRandomPosition(){
  var xPos = getRandomNumber();
  var yPos = getRandomNumber();
  var zPos = getRandomNumber();
  var position = `${xPos} 0 ${zPos}`;
  if(takenPositions.has(position)){
    return getUniqueRandomPosition();
  } else {
    takenPositions.add(position);
    return position;
  }
}

function addModelToScene(modelProperties){
  console.log("prop", modelProperties.modelName);
  var entityElement = document.createElement("a-entity");
  entityElement.setAttribute("id", `${modelProperties.modelName}-id`);
  entityElement.setAttribute("gltf-model", `#${modelProperties.modelName}`);
  entityElement.setAttribute("scale", `${modelProperties.modelScale} ${modelProperties.modelScale} ${modelProperties.modelScale}`);
  entityElement.setAttribute("animation-mixer", `clip:${modelProperties.animationName}`);
  entityElement.setAttribute("position", getUniqueRandomPosition());
  document.getElementById("scene").appendChild(entityElement);
}

for(let i=0;i<DANCE_SET_REPEAT_COUNT;i++){
  for(let j=0;j<dancingModels.length;j++){
    addModelToScene(dancingModels[j]);
  }
}