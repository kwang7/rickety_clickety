/*
Rickety Clickety: Kelly Wang and Michael Ruvinshteyn
SoftDev1 pd07
HW#16: Sequential Progression
2017-12-08  
*/

var addElement = function(){
    var elem = document.createElement("li");
    elem.appendChild(document.createTextNode("an element"));
    document.getElementById("thelist").appendChild(elem);
    console.log("heres an element");
};

var button = document.getElementById("b");
b.addEventListener('click', addElement);

var changeHeading = function(){
    console.log ("wassup");
};
var hover = document.getElementById("thelist");
thelist.addEventListener('mouseover', changeHeading);
