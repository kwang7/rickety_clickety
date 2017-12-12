/*
Rickety Clickety: Kelly Wang and Michael Ruvinshteyn
SoftDev1 pd07
HW#16: Sequential Progression
2017-12-08  
*/

//current last element number
var currElem = 7;
var currElem_fib = 0;
var currElem_tri = 0;

//adds element to list upon button-press
var addElement = function(){
    currElem += 1;
    var elem = document.createElement("li");
    elem.innerHTML = "item " + currElem;
    document.getElementById("thelist").appendChild(elem);
    elem.setAttribute('id','theitem');
    run(elem); //activates other functions on inserted element
    console.log(currElem + 1 + " items total");
};

//button used to add element to list
var button_elem = document.getElementById("b");
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

//adds nth fibonacci number upon button-press
var add_fib = function(){
    var elem = document.createElement("li");
    elem.setAttribute('id','fibitem')
    //elem.innerHTML =  currElem_fib +"th fibonacci number: " + fibonacci(currElem_fib);
    if (currElem_fib < 2){
        elem.innerHTML =  "fibonacci number " + currElem_fib + ": " + fibonacci(currElem_fib);
    }
    else{
        var lis = fibonaccilist.getElementsByTagName('li');
        var str1 = lis[lis.length - 1].innerHTML;
        var str2 = lis[lis.length - 2].innerHTML;
        var num1 = parseInt(str1.substring(str1.length - 1));
        var num2 = parseInt(str2.substring(str2.length - 1));
        var num = num1 + num2;
        elem.innerHTML = "fibonacci number " + currElem_fib + ": " + num;
    };
    document.getElementById("fibonaccilist").appendChild(elem);
    run(elem); //activates other functions on inserted element
    console.log(currElem_fib + 1 + " fib numbers total");
    currElem_fib += 1;

};

var button_fib = document.getElementById("b2");
b2.addEventListener('click', add_fib);

//adds nth triangular number to list upon button-press
var add_triangle = function(){
    var elem = document.createElement("li");
    elem.innerHTML = "triangular number " + currElem_tri + ": " + triangle(currElem_tri + 1);
    document.getElementById("trianglelist").appendChild(elem);
    elem.setAttribute('id','triangleitem');
    run(elem); //activates other functions on inserted element
    console.log(currElem_tri+1 + " triangular numbers total");
    currElem_tri += 1;
};

var triangle = function( n ){
    return ( ( n * (n - 1) ) /2 );
}

var button_triangle = document.getElementById("b3");
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
    if (this.getAttribute('id') == 'theitem'){
        currElem -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = thelist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li++){
            lis[li].innerHTML = "item " + li;
        }
        console.log(currElem+1 + " items total");
    }
    if (this.getAttribute('id') == 'fibitem'){
        currElem_fib -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = fibonaccilist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li ++){
            if (li < 2){
                lis[li].innerHTML = "fibonacci number " + li + ": " + li;
            }
            else{
                var str1 = lis[li - 1].innerHTML;
                var str2 = lis[li - 2].innerHTML;
                var num1 = parseInt(str1.substring(str1.length - 1));
                var num2 = parseInt(str2.substring(str2.length - 1));
                var num = num1 + num2;
                lis[li].innerHTML = "fibonacci number " + li + ": " + num;
            };
        }
        console.log(currElem_fib+1 + " fibonacci numbers total");
    }
    if (this.getAttribute('id') == 'triangleitem'){
        currElem_tri -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = trianglelist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li++){
            var num = ( ( li * (li + 1) ) / 2);
            lis[li].innerHTML = "triangular number " + li + ": " + num;
        }
        console.log(currElem_tri + " triangular numbers total");
    }
};

//function to activate changeHeading, changeHeadingBack, and removeELement for an item
var run = function(item){
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', changeHeadingBack);
    item.addEventListener('click', removeElement);
};

//creates an array of all elements in the list
var LIs = document.getElementsByTagName('li');
for (li = 0; li < LIs.length; li++){
    run(LIs[li]); //activates each item in the list
};
