const sphere = document.querySelector("a-entity");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const sound = document.getElementById("music");

function setAllHidden() {
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
  const rotaion = `0 ${degrees} 0`;

  sphere.setAttribute("rotation", rotaion);
}, 10);

var i = 1;

setInterval(() => {
  if (time >= totalTime) {
    time = 0;
  }
  time += 0.01;
}, 10);

setInterval(() => {
  let angle = (360 / totalTime) * time;
  let x = Math.sin(angle);
  let z = Math.cos(angle);
  one.setAttribute("position", `${3 * x} 3 ${3 * z}`);
  two.setAttribute("position", `${3 * z} 3 ${3 * x}`);
  sound.setAttribute("position", `${3 * z} 3 ${3 * x}`);
  degrees = shiftDegrees(degrees);
  one.setAttribute("color", `hsl(${degrees}, 100%, 50%)`);
  two.setAttribute("color", `hsl(100%, 50%, ${degrees})`);
}, totalTime);

var dancingModels = [
  {
    modelName: "dancing-knight",
    modelFileLocation: "./models/dancing-knight.glb",
    modelScale: 0.5,
    animationName: "ezgif.com-video-to-gif",
  },
  {
    modelName: "dancing-alien",
    modelFileLocation: "./models/dancing-alien.glb",
    modelScale: 1,
    animationName: "mixamo.com",
  },
  {
    modelName: "dance-color-knight",
    modelFileLocation: "./models/dancing-color-knight.glb",
    modelScale: 1,
    animationName: "mixamo.com",
  },
  {
    modelName: "dance-man",
    modelFileLocation: "./models/dancing-man.glb",
    modelScale: 0.01,
    animationName: "Take 001",
  },
  {
    modelName: "dance-woman",
    modelFileLocation: "./models/dancing-women.glb",
    modelScale: 1,
    animationName: "mixamo.com",
  },
];

var DANCE_SET_REPEAT_COUNT = 8;
var takenPositions = new Set();
takenPositions.add("0 1.3 1")
takenPositions.add("0 1 1");
takenPositions.add("0 2 1");

function getRandomNumber(MIN_NUMBER = -10, MAX_NUMBER = 10) {
  let min = Math.ceil(MIN_NUMBER);
  let max = Math.floor(MAX_NUMBER);
  return Math.floor(Math.random() * (max - min) + min);
}

function getUniqueRandomPosition() {
  var xPos = getRandomNumber();
  var zPos = getRandomNumber();
  var position = `${xPos} 0 ${zPos}`;
  if (takenPositions.has(position)) {
    return getUniqueRandomPosition();
  } else {
    takenPositions.add(position);
    return position;
  }
}

function addModelToScene(modelProperties) {
  var entityElement = document.createElement("a-entity");
  entityElement.setAttribute("gltf-model", `${modelProperties.modelFileLocation}`);
  entityElement.setAttribute(
    "scale",
    `${modelProperties.modelScale} ${modelProperties.modelScale} ${modelProperties.modelScale}`
  );
  entityElement.setAttribute(
    "animation-mixer",
    `clip:${modelProperties.animationName}`
  );
  entityElement.setAttribute("position", getUniqueRandomPosition());
  entityElement.setAttribute("rotation", `0 ${getRandomNumber(-360, 360)} 0`)
  document.getElementById("scene").appendChild(entityElement);
}

AFRAME.registerComponent("model-changer", {
  init: function() {
    for (let i = 0; i < DANCE_SET_REPEAT_COUNT; i++) {
      for (let j = 0; j < dancingModels.length; j++) {
        addModelToScene(dancingModels[j]);
      }
    }
  }
})