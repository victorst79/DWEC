// ws#4 - 1,2
// ws#6 - 2c,2d,2e,2f

// navigator
// screen
// window
// document
// history
// location

document.write("<h1>Worksheet#4</h1>");

document.write("<h3>Exercise 1</h3>");

document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr>");
document.write("<td>Request</td>");
document.write("<td>Name</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>apCodename</td>");
document.write("<td>"+ navigator.appCodeName +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Navigator Name</td>");
document.write("<td>"+ navigator.appName +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Navigator Version</td>");
document.write("<td>"+ navigator.appVersion +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Cookies</td>");
document.write("<td>"+ navigator.cookieEnabled +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Plataform</td>");
document.write("<td>"+ navigator.platform +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Agent</td>");
document.write("<td>"+ navigator.userAgent +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Languague</td>");
document.write("<td>"+ navigator.language+"</td>");
document.write("</tr>");
document.write("</table>");

document.write("<h3>Exercise 2</h3>");

document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr>");
document.write("<td>Request</td>");
document.write("<td>Name</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>availHeight</td>");
document.write("<td>"+ screen.availHeight +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>availWidth</td>");
document.write("<td>"+ screen.availWidth +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>colorDepth</td>");
document.write("<td>"+ screen.colorDepth +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>pixelDepth</td>");
document.write("<td>"+ screen.pixelDepth +"</td>");
document.write("</tr>");
document.write("</table>");