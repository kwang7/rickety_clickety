/*
Rickety Clickety: Kelly Wang and Michael Ruvinshteyn
SoftDev1 pd07
HW#16: Sequential Progression
2017-12-08  
*/

//current last element number
var currElem = 7;

//adds element to list upon button-press
var addElement = function(){
    currElem += 1;
    var elem = document.createElement("li");
    elem.innerHTML = "item " + currElem;
    document.getElementById("thelist").appendChild(elem);
    run(elem); //activates other functions on inserted element
    console.log(currElem + " items total");
};

//button used to add element to list
var button = document.getElementById("b");
b.addEventListener('click', addElement);

//changes text of heading after hovering over item in the list
var changeHeading = function(){
    var h = document.getElementById('h');
    h.innerHTML = this.innerHTML;
};

//changes text of heading back to normal after mousing away from item in the list
var changeHeadingBack = function(){
    var h = document.getElementById('h');
    h.innerHTML = 'Hello World';
};

//removes item from list upon mouse-click
var removeItem = function(){
    currElem -= 1;
    this.remove();
    var lis = document.getElementsByTagName('li');
    //sets item names to correspond to their numbers
    for (li = 0; li < lis.length; li++){
        lis[li].innerHTML = "item " + li;
    }
};

//function to activate changeHeading, changeHeadingBack, and removeItem for an item
var run = function(item){
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', changeHeadingBack);
    item.addEventListener('click', removeItem);
};

//creates an array of all elements in the list
var lis = document.getElementsByTagName('li');
for (li = 0; li < lis.length; li++){
    run(lis[li]); //activates each item in the list
};
