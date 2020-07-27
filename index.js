const $ = (query) => document.querySelector(query);

const sphere = $('a-entity');
const plane = $('a-plane');
const sky = $('a-sky')
const obj = document.getElementById("tree-obj");
const mtl = document.getElementById("tree-mtl");

const shiftDegrees = (value) => (value + 1) % 360;

let degrees = 0;

// const animate = () => {
//   degrees = shiftDegrees(degrees);
//   const color = `hsl(${degrees}, 100%, 50%)`;
//   const variation = Math.sin(Date.now() / 1000);
//   const rotation = `-90 0 ${degrees}`;

//   sphere.setAttribute('color', color);

// //   plane.setAttribute('color', color);
// //   sky.setAttribute('color', color);

//   requestAnimationFrame(animate);
// };

// requestAnimationFrame(animate);

setInterval(() => {
    degrees = shiftDegrees(degrees);
  const color = `hsl(${degrees}, 100%, 50%)`;
  const color2 = `hsl(${2*degrees}, 100%, 50%)`;
  const rotaion = `0 ${degrees} 0`

  sphere.setAttribute('color', color);
  sphere.setAttribute('rotation', rotaion)
//   sky.setAttribute('color', color);
},10);