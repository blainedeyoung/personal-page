/*
11.5 seconds after the window loads this will
add a hover to the grass and trees image which will
make the information panel drop down
*/
const grassAndTrees = document.getElementById("grassAndTrees");

window.onload = setTimeout(() => {
  grassAndTrees.setAttribute('class', 'grassAndTrees');
}, 11500);


