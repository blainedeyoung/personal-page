/*
  This script solves a firefox bug that sometimes stops it from displaying favicons
*/

function setFavicon() {
  var link = $('link[type="image/x-icon"]').remove().attr("href");
  $('<link href="'+ link +'" rel="shortcut icon" type="image/x-icon" />').appendTo('head');
}

/*
11.5 seconds after the window loads this will
add a hover to the grass and trees image which will
make the information panel drop down
*/
const grassAndTrees = document.getElementById("grass-and-trees");

window.onload = setTimeout(() => {
  grassAndTrees.setAttribute('class', 'grass-and-trees');
}, 11500);


