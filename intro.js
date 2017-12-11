/*
Rickety Clickety: Kelly Wang and Michael Ruvinshteyn
SoftDev1 pd07
HW#16: Sequential Progression
2017-12-08  
*/

//current last element number
var currElem = 7;
var currElem2 = 0;
var currElem3 = 1;

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

//fxn to find the nth fibonacci number
var fibonacci = function (n){
    if (n == 0)
	return 0;
    if (n == 1 || n == 2)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

///adds nth fibonacci number upon button-press
var add_fib = function(){
    var elem = document.createElement("li");
    elem.innerHTML =  currElem2 +"th fibonacci number: " + fibonacci(currElem2);
    document.getElementById("thesecondlist").appendChild(elem);
    run(elem); //activates other functions on inserted element
    console.log(currElem2 + " items total");
    currElem2 += 1;

};

var buttun = document.getElementById("b2");
b2.addEventListener('click', add_fib);

//adds nth triangular number to list upon button-press
var add_triangle = function(){
    var elem = document.createElement("li");
    elem.innerHTML =  currElem3-1 +"th triange number: " + triangle(currElem3);
    document.getElementById("thethirdlist").appendChild(elem);
    run(elem); //activates other functions on inserted element
    console.log(currElem3 + " items total");
    currElem3 += 1;
};

var triangle = function( n ){
    return ( ( n * (n - 1 ))/2 );
}

var bottun = document.getElementById("b3");
b3.addEventListener('click', add_triangle);

//changes text of heading after hovering over item in the list
var changeHeading = function(){
    var h = document.getElementById('h');
    h.innerHTML = this.innerHTML;
    //console.log('heading has been changed');
};

//changes text of heading back to normal after mousing away from item in the list
var changeHeadingBack = function(){
    var h = document.getElementById('h');
    h.innerHTML = 'Hello World!';
    //console.log('heading has been changed back');
};

//removes element from list upon mouse-click
var removeElement = function(){
    currElem -= 1;
    this.remove();
    /*
    var lis = document.getElementsByTagName('li');
    //sets item names to correspond to their numbers
    for (li = 0; li < lis.length; li++){
        lis[li].innerHTML = "item " + li;
    }
    */
    console.log(currElem + " items total");
};

//function to activate changeHeading, changeHeadingBack, and removeItem for an item
var run = function(item){
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', changeHeadingBack);
    item.addEventListener('click', removeElement);
};

//creates an array of all elements in the list
var lis = document.getElementsByTagName('li');
for (li = 0; li < lis.length; li++){
    run(lis[li]); //activates each item in the list
};
