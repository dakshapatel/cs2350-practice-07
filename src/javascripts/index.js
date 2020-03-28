// Required by Webpack - do not touch
// Webpack compiles all the files into a single file
require.context("../", true, /\.(html|json|txt|dat)$/i);
// compile all images files into a single image file
require.context("../images/", true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i);
// compile all .css files into a single css file called application.css
require.context("../stylesheets/", true, /\.(css|scss)$/i);

// JavaScript
//TODO
import "bootstrap";


// let name = "Daksha Patel";
// const university = "Weber State University";
// console.log("Hello " + name + " " + university);

const displayRandomBox = function() {
  let r = Math.random();
  if (r < 0.5) {
    document.write('<div class="red box">red box</div>');
  } else {
    document.write('<div class="blue box"></div>');
  }
};

// for loop
function displayNBoxesUsingFor(n) {
  for (let i = 0; i < n; ++i) {
    displayRandomBox();
  }
}

// while loop
function displayNBoxesUsingWhile(n) {
  let j = 0;
  while (j < n) {
    displayRandomBox();
    j++;
  }
}

// do/while loop
function displayNBoxesUsingDoWhile(n) {
  let k = 0;
  do {
    displayRandomBox();
    k++;
  } while (k < n);
}

// call a function
displayNBoxesUsingFor(20);
displayNBoxesUsingWhile(10);
displayNBoxesUsingDoWhile(15);

const square = function(x) {
  return x * x;
};
