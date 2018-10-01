document.write("<h1>Worksheet#4</h1>");

document.write("<h3>Exercise 2</h3>");

document.write("<h4>C)</h4>");

// number of imgs in html
var img = document.getElementsByTagName("img");
document.write(img.length);

document.write("<h4>D)</h4>");
// name of id of first img
var image_id = document.getElementById("img-first");
document.write(image_id.id);

document.write("<h4>E)</h4>");
//number of a in html
var numberA = document.getElementsByTagName("a");
document.write(numberA.length);

document.write("<h4>F)</h4>");
// change title
document.title = "New tittle";
document.write(document.title);